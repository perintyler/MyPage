/*** ContactForm.jsx ***/

import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

class ContactInfo 
{
  constructor(name, email, message, phoneNumber=null) 
  {
    if (process.env.ENVIRONMENT === 'development') {
      this.name = `${name} (development)`;
    } else {
      this.name = name;
    }

    this.email = email;
    this.message = message;
    this.phoneNumber = phoneNumber;
  }

  pretty() 
  {
    return `<ContactInfo name='${this.name}' email='${this.email}' message='${this.message}' phoneNumber='${this.phoneNumber}'>`
  }

  to_object() 
  {
    return {
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber || "",
      message: this.message || ""
    };
  }

  to_json() {
    return JSON.stringify(this.to_object());
  }
}

export function ContactForm({ title, onComplete, buttonTitle, children, msgIsRequired, askForPhone, numMessageRows, width, isDisabled }) 
{
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete(new ContactInfo(name, email, message || null, phoneNumber || null));
    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  var phoneNumberTextField = askForPhone !== true ? <></> : (
    <TextField
      fullWidth
      label="Phone Number"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
      margin="normal"
      required={true}
    />
  );

  return (
    <Box className="contact-form" maxWidth="800px" pb={2}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          type="email"
          required
        />
        {phoneNumberTextField}
        <TextField
          fullWidth
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          margin="normal"
          multiline
          minRows={numMessageRows || 6}
          required={msgIsRequired || false}
        />
        <Button 
          disabled={isDisabled} 
          fullWidth={true} 
          variant="contained" 
          type="submit" 
          sx={{ mt: 2 }}
          children={buttonTitle || "submit"}
        />
      </form>
    </Box>
  );
}

