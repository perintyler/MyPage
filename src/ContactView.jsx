
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { ContactForm } from './ContactForm';
import { FadeInContainer } from './Animations';
import EmailApi from './EmailApi';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function EmailSentDialog({ show, success, onClose })
{
  const successMessage = "Your message was successfully sent";
  const failureMessage = "Something went wrong... Your message failed to send.";

  let severity = success === true ? "success" : "error";

  return (
    <Dialog open={show} transitionDuration={0}>
      <Alert severity={severity} variant="filled">
        <AlertTitle style={{textTransform:'capitalize'}}>{severity}</AlertTitle>
        <div>{success === true ? successMessage : failureMessage}</div>
      </Alert>
      <Button color={severity} width="100%" onClick={()=>onClose()}>OK</Button>
    </Dialog>
  );
}

function ContactViewContainer({ children })
{
  let boxStyle = {
    background: `url(${process.env.PUBLIC_URL + '/blue-backdrop.png'})`, 
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    minHeight: '100vh'
  };

  let cardStyle = {
    boxShadow: 5,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.78)',
    padding: '36px'
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <FadeInContainer>
        <Box 
          height="100%" 
          width="100%" 
          className="contact-view-container" 
          style={boxStyle}
          display="flex" 
          flexDirection="column" 
          justifyContent="center" 
          alignItems="center"
        >
          <Card style={cardStyle}>{children}</Card>
        </Box>
      </FadeInContainer>
    </ThemeProvider>
  );
}

export default function ContactView()
{
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  function resetState() {
    setIsDialogOpen(false);
    setSuccess(false);
  }

  function handleSubmission(contactInfo) {
    EmailApi.new_message(contactInfo, function onSuccess() {
      setSuccess(true);
      setIsDialogOpen(true);
    }, function onFailure() {
      setSuccess(false);
      setIsDialogOpen(true);
    });
  }

  return (
    <ContactViewContainer>
      <h1 style={{marginTop: 0, textAlign: "center"}}>Contact</h1>
      <ContactForm
        buttonTitle="send"
        onComplete={(contactInfo) => handleSubmission(contactInfo)}
        msgIsRequired={true}
        phoneIsRequired={false}
      />
      <EmailSentDialog show={isDialogOpen} success={success} onClose={()=>resetState()} />
    </ContactViewContainer>
  );
}
