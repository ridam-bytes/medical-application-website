import React from 'react';
import { StyledForm, StyledInput, StyledButton, StyledAlert, StyledLabel, Heading, Subheading, StyledInputHalf } from './FormComponents.js';
import axios from 'axios';
import toast from "react-hot-toast";

function ContactForm() {
  const [name, setName] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const [mailInvalid, setMailInvalid] = React.useState(false);
  const [messageInvalid, setMessageInvalid] = React.useState(false);
  const [nameInvalid, setNameInvalid] = React.useState(false);

  const [enabled, setEnabled] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    buttonEnabled(name, mail, message);
    const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/userQuery/addUserQuery`, {
      name,
      mail,
      message
    });

    toast.success(res.data.message);

    return Promise.all([
      setName(""),
      setMail(""),
      setMessage("")
    ]);

  }

  const nameEntered = (e) => {
    setName(e.target.value);
    buttonEnabled(e.target.value, mail, message);
  }

  const mailEntered = (e) => {
    setMail(e.target.value);
    buttonEnabled(name, e.target.value, message);
  }

  const messageEntered = (e) => {
    setMessage(e.target.value);
    buttonEnabled(name, mail, e.target.value);
  }

  const buttonEnabled = (name, mail, message) => {
    const isMailValidRes = isMailValid(mail);
    const isNameValidRes = isNameValid(name)
    const isMessageValidRes = isMessageValid(message);
    if (isMailValidRes && isNameValidRes && isMessageValidRes) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }

  const isMailValid = (mail) => {
    if (mail.length === 0) {
      setMailInvalid(true);
      return false
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(mail)) {
      setMailInvalid(true);
      return false;
    }
    setMailInvalid(false);
    return true;
  }

  const isMessageValid = (message) => {
    if (message.length === 0) {
      setMessageInvalid(true);
      return false;
    }
    setMessageInvalid(false);
    return true;
  }

  const isNameValid = (name) => {
    if (name.length === 0) {
      setNameInvalid(true);
      return false;
    }
    setNameInvalid(false)
    return true;
  }



  return (
    <StyledForm onSubmit={handleSubmit}>
      <Heading>Contact Us</Heading>
      <Subheading>Feel free to reach out to us!</Subheading>

      <StyledLabel invalid={nameInvalid}>Name:</StyledLabel>
      <StyledInputHalf type="text" value={name} onChange={(e) => nameEntered(e)} />
      {nameInvalid && <StyledAlert>Name is invalid.</StyledAlert>}

      <StyledLabel invalid={mailInvalid}>Email:</StyledLabel>
      <StyledInputHalf type="text" value={mail} onChange={(e) => mailEntered(e)} />
      {mailInvalid && <StyledAlert>Email is invalid.</StyledAlert>}

      <StyledLabel invalid={messageInvalid}>Message:</StyledLabel>
      <StyledInput type="text" value={message} onChange={(e) => messageEntered(e)} />
      {messageInvalid && <StyledAlert>Message is invalid.</StyledAlert>}

      <StyledButton type="submit" disabled={!enabled}>Submit</StyledButton>
    </StyledForm>
  )
}

export default ContactForm;