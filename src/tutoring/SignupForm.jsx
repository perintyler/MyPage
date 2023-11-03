
import { useState, useRef, useEffect } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Slide from '@mui/material/Slide';
import CircularProgress from '@mui/material/CircularProgress';
import { Stepper } from 'react-form-stepper';
import { ContactForm } from '../contact/ContactForm';
import EmailApi from '../EmailApi'
import './SignupForm.css';

const MINIMUM_GRADE = 6;
const MAXIMUM_GRADE = 12; // inclusive
const SIGNUP_STEPS = ["Select Grade", "Select Course", "Contact Info", "Done"];

class SignupInfo 
{
    constructor() {
        this.course = null;
        this.grade = null;
        this.contactInfo = null;
    }

    is_valid() 
    {
        return this.course != null && this.grade != null && this.contactInfo != null;
    }

    pretty() 
    {
        return `<SignupInfo service='${this.course}' grade='${this.grade}' contactInfo=${this.contactInfo.pretty()}>`
    }

    to_object()
    {
        return { 
            course: this.course,
            grade: this.grade,
            ...this.contactInfo.to_object()
        }
    }

    to_json()
    {
        return JSON.stringify(this.to_object());
    }
}

function SignupStepContainer({ title, subtitle, children, stepBack, margin })
{
    var backArrow = stepBack === undefined ? <Box className="back-arrow" /> : (
        <IconButton className="back-arrow" onClick={()=>stepBack()} >
            <ArrowBackIcon/>
        </IconButton>
    );

    var header = (
        <div className="signup-step-header">
            {title    === undefined ? <div /> : <h2>{ title }</h2>}
            {subtitle === undefined ? <div /> : <h4>{ subtitle }</h4>}
        </div>
    );

    var inputs = <Box mt={margin || "24px"} className="signup-input-column">{children}</Box>;

    return (
        <Box className="signup-step">
            <Slide direction="right" in={true} timeout={600} mountOnEnter unmountOnExit>
                <Card sx={{boxShadow: 5}} className="signup-input-card">{backArrow}{header}{inputs}</Card>
            </Slide>
        </Box>
    );
}

function SignupFormButton({ onClick, title })
{
    return (
        <Box m={1} width="100%">
            <Button fullWidth={true} className="signup-info-button" variant="contained" onClick={onClick}>{ title }</Button>
        </Box>
    );
}

// ==============================================================================================================

/**
 ** Signup Step #1 
 **/
function GradeInputBox({ signupInfo, stepBack, stepForward })
{
    var allowedGrades = Array.from({length: MAXIMUM_GRADE-MINIMUM_GRADE+1}, (_, index) => index+MINIMUM_GRADE);

    var gradeButtons = allowedGrades.map((grade) => (
        <SignupFormButton key={grade} title={`${grade}th Grade`} onClick={() => {
            signupInfo.current.grade = grade;
            stepForward();
        }} />
    ));
    
    return <SignupStepContainer title="What grade are you in?" stepBack={stepBack} children={gradeButtons} />;
}

/**
 ** Signup Step #2 
 **/
function CourseInputBox({ signupInfo, stepBack, stepForward })
{
    function SelectTutoringServiceButton({ course }) {
        return <SignupFormButton title={course} onClick={()=>{
            signupInfo.current.course = course; 
            stepForward();
        }} />;
    }

    return (
        <SignupStepContainer title="What course do you need tutoring for?" stepBack={stepBack}>
            <SelectTutoringServiceButton course="AP Computer Science" />
            <SelectTutoringServiceButton course="Beginner Python" />
            <SelectTutoringServiceButton course="Intermediate Python" />
            <SelectTutoringServiceButton course="Data Structures & Algorithms" />
            <SelectTutoringServiceButton course="Web Design" />
            <SelectTutoringServiceButton course="Personalized Curiculum" />
            <SelectTutoringServiceButton course="Other" />
        </SignupStepContainer>
    );
}

/**
 ** Signup Step #3
 **/
function ContactInputBox({ signupInfo, stepBack, stepForward })
{
    return (
        <SignupStepContainer 
          stepBack={stepBack} 
          title="How can I reach you?" 
          subtitle="Add a message if there's anything else you'd like to tell me"
          margin="0px"
        >
            <ContactForm 
              buttonTitle="Complete Signup" 
              msgIsRequired={false} 
              phoneIsRequired={true}
              onComplete={(contactInfo) => {
                signupInfo.current.contactInfo = contactInfo;
                stepForward();
            }} />
        </SignupStepContainer>
    );
}

/**
 ** Signup Step #4
 **/
function SignupCompleteBox({ signupInfo, stepBack, stepForward })
{
    // TODO: I don't think I should need both `apiRequestWasSent` and `isLoading` state,
    //       but without it, multiple emails are getting sent. investigate this.
    const [apiRequestWasSent, setApiRequestWasSent] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        var shouldMakeApiCall = !apiRequestWasSent;
        setApiRequestWasSent(true);

        if (!shouldMakeApiCall && isLoading && !success) {
            EmailApi.new_tutoring_signup(signupInfo.current, function onSuccess() {
                setIsLoading(false);
                setSuccess(true);
            }, function onFailure() {
                setIsLoading(false);
                setSuccess(false);
            });
        }
    }, [apiRequestWasSent, isLoading, success, signupInfo]);

    function getTitle() {
        return success ? "Signup Complete" : "Signup Failed";
    }

    function getSubtitle() {
        if (success === true) {
            return "I will get back to you within 1-2 business days";
        } else {
            return "Something went wrong with the email service. Try again letter or email me at tyler@perin.email";
        }
    }

    if (isLoading) {
        return (
            <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
                <CircularProgress />
            </Box>
        );
    } else {
        return (
            <SignupStepContainer className="signup-complete-box" title={getTitle()} subtitle={getSubtitle()}>
                <Box mb="20px">
                    <Button variant="outlined" onClick={()=>stepForward(signupInfo)}>
                        { success ? "OK" : "Go Back" }
                    </Button>
                </Box>
            </SignupStepContainer>
        );
    }
}
    
// ==============================================================================================================

export default function SignupForm({ onComplete, onCancel }) 
{
    const [stepNumber, setStepNumber] = useState(0);

    const signupInfo = useRef(new SignupInfo());
    const allSignupSteps = [GradeInputBox, CourseInputBox, ContactInputBox, SignupCompleteBox]

    function stepForward() 
    {
        if (stepNumber === allSignupSteps.length-1) {
            onComplete(signupInfo.current);
        } else {
            setStepNumber(stepNumber+1);
        }
    }

    function stepBack() 
    {
        if (stepNumber === 0) {
            onCancel();
        } else {
            setStepNumber(stepNumber-1)
        }
    }

    var SignupStep = allSignupSteps[stepNumber];

    return (
      <Box width="100%" display="flex" flexDirection="column" className="signup-form" pt="100px">
        <SignupStep signupInfo={signupInfo} stepForward={stepForward} stepBack={stepBack} />
        <Stepper steps={SIGNUP_STEPS.map(step => ({label: step}))} activeStep={stepNumber} />
      </Box>
    );
}
