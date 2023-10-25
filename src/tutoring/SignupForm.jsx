
import { useState, useRef } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MultiStep from 'react-multistep';
import ContactForm from '../ContactForm';
import './SignupForm.css';

class SignupInfo 
{
    constructor() {
        this.isParent = null;
        this.service = null;
        this.userEmail = null;
        this.userPhone = null; // optional
        this.userMessage = null;
    }
    
    
}

function SignupInputBox({ title, subtitle, children })
{
  return (
      <Box className="signup-input-box">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">{ children }</Box>
      </Box>
  );
}

function SignupInfoButton({ onClick, title })
{
    return (
        <Box m={1}>
            <Button className="signup-info-button" variant="contained" onClick={onClick}>{ title }</Button>
        </Box>
    );
}

// ------------------------------------------------------------------------------------------

/* Signup Step #1 */
function ParentOrChildInputBox({ signupInfo, goToNextStep })
{
  function completeForm1(isParent) {
      signupInfo.isParent=isParent;
      goToNextStep();
  }
  
  return (
      <SignupInputBox title="Signup" subtitle="Who needs Tutoring?">
          <SignupInfoButton onClick={()=>completeForm1(false)} title="I do" />
          <SignupInfoButton onClick={()=>completeForm1(true)} title="My child" />
      </SignupInputBox>
  );
}

/* Signup Step #2 */
function CourseInputBox({ signupInfo, goToNextStep })
{
    function completeForm2(service) {
        signupInfo.service = service; 
        goToNextStep();
    }

    function SelectTutoringServiceButton({ service }) {
        return <SignupInfoButton onClick={()=>completeForm2(service)} title={service} />
    }

    return (
        <SignupInputBox title="Course" subtitle="Which course do you need tutoring for?">
            <SelectTutoringServiceButton service="AP Computer Science" />
            <SelectTutoringServiceButton service="Beginner Python Course" />
            <SelectTutoringServiceButton service="Intermediate Python Course" />
            <SelectTutoringServiceButton service="Web Design Course" />
            <SelectTutoringServiceButton service="Personalized Curiculum" />
            <SelectTutoringServiceButton service="Other" />
        </SignupInputBox>
    );
}

/* Signup Step #3 */
function ContactInputBox({ signupInfo, goToNextStep })
{
  return (
    <SignupInputBox title="Reach out" subtitle="Enter your contact info and send me a message.">
      <ContactForm />
    </SignupInputBox>
  );
}

export default function SignupForm({ onComplete }) 
{
  const [signupStep, setSignupStep] = useState(1);
  const signupInfo = useRef(new SignupInfo());

  var SignupForm;

  if (signupStep === 1) {
    SignupForm = ParentOrChildInputBox;
  } else if (signupStep === 2) {
    SignupForm = CourseInputBox;
  } else if (signupStep === 3) {
    SignupForm = ContactInputBox;
  } else {
    return (
        <Box>
            <h1>Signup Complete</h1>
            <p>I will get back to you within the next 2-3 business days</p>
            <Button onClick={()=>{}}>OK</Button>
        </Box>
    );
  }

  return <SignupForm signupInfo={signupInfo} goToNextStep={()=>setSignupStep(signupStep+1)} />
}