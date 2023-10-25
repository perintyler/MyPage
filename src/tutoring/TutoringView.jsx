import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import ContactForm from '../ContactForm';
import COLORS from '../Colors';
import SignupForm from './SignupForm';
import './NumberedList.css';
import './TutoringView.css';

let theme = createTheme();

theme.typography.h1 = {
  fontSize: '90px',
  '@media (min-width:900px)': {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5.8rem',
  },
};

function SignupButton({ onClick }) 
{
    const buttonStyle = {height: "80px", width: "98%", borderRadius: "10px"};
    return <Button onClick={()=>onClick()} variant="contained" sx={buttonStyle}>Sign Up</Button>
}

function AvailableServicesBox({ startSignup })
{
    return (
        <Box pt={0} className="available-services-box">
            <div className="numbered-list">
                <h1>1-on-1 Computer Science Tutoring with Tyler Perin</h1>

                <ol class="alternating-colors">
                  <li>
                    <strong>AP Computer Science</strong>
                    <p>Learn how to ace the AP test from someone who got a 5!</p>
                  </li>
                  <li>
                    <strong>Beginner & Intermediate Python</strong>
                    <p>Learn how to idk </p>
                  </li>
                  <li>
                    <strong>Web-Design Courses</strong>
                    <p>Learn how to make your own websites</p>
                  </li>
                  <li>
                    <strong>Personalized Curiculum</strong>
                    <p>Lessons tailored for your success</p>
                  </li>
                </ol>
                <Box pt={5} display="flex" justifyContent="center"> 
                  <SignupButton onClick={startSignup} />
                </Box>
            </div>
        </Box>
    )
}

function TutoringViewTitle()
{
    return (
      <Box mt={12} id="tutoring-view-title-box" width="100%" backgroundColor={COLORS.offwhite}>
        <Box ml={5}>
          <h1 className="white-text">1-on-1 Computer Science</h1>
        </Box>
        <Box ml={16}>
          <h1 className="white-text">Tutoring with Tyler Perin</h1>
        </Box>
      </Box>
    );
}

function TutoringInfoBox({ startSignup })
{
  let backdropUrl = `url(${process.env.PUBLIC_URL + '/purple-backdrop.png'})`;
  return (
    <Box pt={8} id="tutoring-view">
      <Box id="tutoring-view-header-box" style={{background: backdropUrl, backgroundSize: 'cover'}}>
          <Box pt={3}>
              <Box display="flex" flexDirection="column" sx={{width: "80%"}}>
                  <AvailableServicesBox startSignup={()=>startSignup()} />
              </Box>
          </Box>
      </Box>
    </Box>
  );
}

export default function TutoringView()
{
  const [isSigningUp, setIsSigningUp] = useState(false);

  if (isSigningUp) {
    return <SignupForm onComplete={()=>{}} /> 
  } else {
    return <TutoringInfoBox startSignup={()=>setIsSigningUp(true)} />;
  }
}
