import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TutoringServicesList from './TutoringServicesList'
import SignupForm from './SignupForm';
import { newSignupRequest } from '../ContactApi'
import { FadeInContainer } from '../Animations'
import './NumberedList.css';
import './TutoringView.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function TutoringViewContainer({ children })
{
    let style = {
      background: `url(${process.env.PUBLIC_URL + '/red-backdrop.png'})`, 
      backgroundSize: 'cover'
    };

    return (
        <FadeInContainer>
            <Box className="tutoring-view-container" style={style}>{children}</Box>
        </FadeInContainer>
    );
}

function TutoringViewContent({ isSigningUp, startSignup, cancelSignup, completeSignup }) 
{
    if (isSigningUp) {
        return <SignupForm onComplete={completeSignup} onCancel={cancelSignup} />;
    } else {
        return <TutoringServicesList startSignup={startSignup} />;
    }
}

export default function TutoringView()
{
    const [isSigningUp, setIsSigningUp] = useState(false);
    
    var openSignupForm = () => setIsSigningUp(true);

    var closeSignupForm = () => setIsSigningUp(false);

    var completeSignup = (signupInfo) => { 
        newSignupRequest(signupInfo); 
        closeSignupForm(); 
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <TutoringViewContainer>
                <TutoringViewContent
                  className="tutoring-view-content"
                  isSigningUp={isSigningUp} 
                  startSignup={openSignupForm} 
                  cancelSignup={closeSignupForm}
                  completeSignup={completeSignup}
                />
            </TutoringViewContainer>
        </ThemeProvider>
    );
}
