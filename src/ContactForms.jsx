/*** ContactForm.jsx ***/

import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

class ContactInfo {
  constructor(name, email, message, phoneNumber=null) {
    this.name = name;
    this.email = email;
    this.message = message;
    this.phoneNumber = phoneNumber;
  }

  pretty() {
    return `<ContactInfo name='${this.name}' email='${this.email}' message='${this.message}' phoneNumber='${this.phoneNumber}'>`
  }
}

export function SimpleContactForm({ title, onComplete, buttonTitle, children, msgIsRequired }) 
{
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete(new ContactInfo(name, email, message || null));
  };

  return (
    <Box sx={{ maxWidth: 600 }} pb={2} className="contact-form">
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
        {children}
        <TextField
          fullWidth
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          margin="normal"
          multiline
          minRows={6}
          required={msgIsRequired || false}
        />
        <Button fullWidth={true} variant="contained" type="submit" sx={{ mt: 2 }}>{buttonTitle || "submit"}</Button>
      </form>
    </Box>
  );
}

/**
 ** includes more inptut fields than `SimpleContactForm`, such as phone number input
 **/
export function ExtendedContactForm({ title, onComplete, buttonTitle, children, msgIsRequired })
{
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <SimpleContactForm
      title={title}
      onComplete={onComplete}
      buttonTitle={buttonTitle}
      msgIsRequired={msgIsRequired}
    >
      <TextField
        fullWidth
        label="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        margin="normal"
        required
      />
      {children}
    </SimpleContactForm>
  );
}

