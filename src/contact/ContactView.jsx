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
import { usePageViewLogger } from '../Analytics';
import { TealBackdrop } from '../Backdrops'
import EmailApi from '../EmailApi';
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
    <TealBackdrop>
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
    </TealBackdrop>
  );
}

export default function ContactView()
{
  usePageViewLogger('contact');

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formIsDisabled, setFormIsDisabled] = useState(false);

  function resetState() {
    setIsDialogOpen(false);
    setSuccess(false);
    setFormIsDisabled(false);
  }

  function handleSubmission(contactInfo) {
    setFormIsDisabled(true);
    EmailApi.new_message(contactInfo, function onSuccess() {
      setSuccess(true);
      setFormIsDisabled(false);
      setIsDialogOpen(true);
    }, function onFailure() {
      setSuccess(false);
      setFormIsDisabled(false);
      setIsDialogOpen(true);
    });
  }

  return (
    <ContactViewContainer>
      <h1 style={{marginTop: 0, textAlign: "center", userSelect: "none"}}>Contact</h1>
      <ContactForm
        buttonTitle="send"
        onComplete={(contactInfo) => handleSubmission(contactInfo)}
        msgIsRequired={true}
        askForPhone={false} 
        numMessageRows={12}
        isDisabled={formIsDisabled}
      />
      <EmailSentDialog show={isDialogOpen} success={success} onClose={()=>resetState()} />
    </ContactViewContainer>
  );
}
