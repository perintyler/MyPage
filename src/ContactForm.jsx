/*** ContactForm.jsx ***/

import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

export default function ContactForm({ title, onComplete }) 
{
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === null) {
      console.alert("'Name' is required. Fill in the missing field, then try again.")
    } else if (email === null) {
      console.alert("'Email' is required. Fill in the missing field, then try again.")
    } else if (message === null) {
      console.alert("'Message' is required. Fill in the missing field, then try again.")
    } else {
      onComplete(name, email, phoneNumber, message);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, p: 2 }}>
      <Typography variant="h4" align="center" mb={2}>{ title != null ? title : "" }</Typography>
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
        <TextField
          fullWidth
          label="Phone # (optional)"
          value={email}
          onChange={(e) => setPhoneNumber(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          margin="normal"
          multiline
          rows={4}
          required
        />
        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
}
