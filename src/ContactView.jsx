
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SimpleContactForm } from './ContactForms';
import { FadeInContainer } from './Animations';
import { newMessage } from './EmailApi';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

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
  return (
    <ContactViewContainer>
      <h1 style={{marginTop: 0, textAlign: "center"}}>Contact</h1>
      <SimpleContactForm
        buttonTitle="send"
        onComplete={(contactInfo) => newMessage(contactInfo)}
        msgIsRequired={true}
      />
    </ContactViewContainer>
  );
}
