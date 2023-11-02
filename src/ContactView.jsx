/*** ContactView.jsx ***/

import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { ContactForm } from './ContactForm';
import { YellowBackdrop } from './Backdrops'
import EmailApi from './EmailApi';
import './ContactView.css';

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
  var contactCard = (
    <ThemeProvider theme={darkTheme}>
      <Card className="contact-card">{children}</Card>
    </ThemeProvider>
  );

  return (
    <YellowBackdrop>
      <Box
        height="100%" 
        width="100%" 
        minHeight="100vh"
        display="flex"
        flexDirection="column" 
        justifyContent="center" 
        alignItems="center"
        children={contactCard}
      />
    </YellowBackdrop>
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
