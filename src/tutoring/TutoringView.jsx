import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { RedBackdrop } from '../Backdrops';
import { usePageViewLogger } from '../Analytics';
import TutoringServicesList from './TutoringServicesList'
import SignupForm from './SignupForm';
import './NumberedList.css';
import './TutoringView.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function TutoringViewContainer({ children })
{
    return (
      <RedBackdrop>
        <Box display="flex" justifyContent="center" alignItems="center" className="tutoring-view-container">
            <ThemeProvider theme={darkTheme}>{ children }</ThemeProvider>
        </Box>
      </RedBackdrop>
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
    usePageViewLogger('tutoring');

    const [isSigningUp, setIsSigningUp] = useState(false);
    
    var openSignupForm = () => setIsSigningUp(true);

    var closeSignupForm = () => setIsSigningUp(false);

    var completeSignup = (signupInfo) => { 
        closeSignupForm(); 
    };

    return (
        <TutoringViewContainer>
            <TutoringViewContent
              className="tutoring-view-content"
              isSigningUp={isSigningUp} 
              startSignup={openSignupForm} 
              cancelSignup={closeSignupForm}
              completeSignup={completeSignup}
            />
        </TutoringViewContainer>
    );
}
