
import { useState, useRef } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Slide from '@mui/material/Slide';
import { Stepper } from 'react-form-stepper';
import ContactForm from '../ContactForm';
import './SignupForm.css';

const MINIMUM_GRADE = 6;
const MAXIMUM_GRADE = 12; // inclusive
const SIGNUP_STEPS = ["Select Grade", "Select Course", "Contact Info", "Success"];

class SignupInfo 
{
    constructor() {
        this.service = null;
        this.grade = null;
        this.contactInfo = null;
    }

    isValid() {
        return this.service != null && this.grade != null && this.contactInfo != null;
    }

    pretty() {
        return `<SignupInfo service='${this.service}' grade='${this.grade}' contactInfo=${this.contactInfo.pretty()}>`
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
    function SelectTutoringServiceButton({ service }) {
        return <SignupFormButton title={service} onClick={()=>{
            signupInfo.current.service = service; 
            stepForward();
        }} />;
    }

    return (
        <SignupStepContainer title="What course do you need tutoring for?" stepBack={stepBack}>
            <SelectTutoringServiceButton service="AP Computer Science" />
            <SelectTutoringServiceButton service="Beginner Python" />
            <SelectTutoringServiceButton service="Intermediate Python" />
            <SelectTutoringServiceButton service="Data Structures & Algorithms" />
            <SelectTutoringServiceButton service="Web Design" />
            <SelectTutoringServiceButton service="Personalized Curiculum" />
            <SelectTutoringServiceButton service="Other" />
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
          subtitle="Add a message if you there's anything else you'd like to tell me"
          margin="0px"
        >
            <ContactForm buttonTitle="Complete Signup" onComplete={(contactInfo) => {
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
    const title = "Signup Complete";
    const subtitle = "I will get back to you within 1-2 business days";

    console.log(`New SignupForm: ${signupInfo.current.pretty()}`);

    return (
        <SignupStepContainer className="signup-complete-box" title={title} subtitle={subtitle}>
            <Box mb="20px">
                <Button variant="outlined" onClick={()=>stepForward(signupInfo)}>OK</Button>
            </Box>
        </SignupStepContainer>
    );
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
            onComplete(signupInfo);
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
        <Stepper steps={SIGNUP_STEPS.map(step => ({label: step}))} activeStep={stepNumber} />
        <SignupStep signupInfo={signupInfo} stepForward={stepForward} stepBack={stepBack} />
      </Box>
    );
}
