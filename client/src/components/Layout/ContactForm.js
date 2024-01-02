import React from 'react';
import styled from 'styled-components';
import { StyledForm, StyledInput, StyledButton, StyledAlert, StyledLabel, Heading, Subheading, StyledInputHalf } from './FormComponents.js';

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
    buttonEnabled(e.target.name, e.target.mail, e.target.message);
    await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {
      name,
      mail,
      message
    })
  }

  const nameEntered = (e) => {
    setName(e.target.value);
    buttonEnabled(name, mail, message);
  }

  const mailEntered = (e) => {
    setMail(e.target.value);
    buttonEnabled(name, mail, message);
  }

  const messageEntered = (e) => {
    setMessage(e.target.value);
    buttonEnabled(name, mail, message);
  }

  const buttonEnabled = (name, mail, message) => {
    if (isMailValid(mail) && isNameValid(name) && isMessageValid(message)) {
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
    if(message.length === 0){
      setMessageInvalid(true);
      return false;
    }
    setMessageInvalid(false);
    return true;
  }

  const isNameValid = (name) => {
    if(name.length === 0){
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
      <StyledLabel>Name:</StyledLabel>
      <StyledInputHalf type="text" value={name} onChange={e => nameEntered(e)} />
      {nameInvalid && <StyledAlert>Name is invalid.</StyledAlert>}
      
      <StyledLabel invalid={mailInvalid}>Email:</StyledLabel>
      <StyledInputHalf type="text" value={mail} onChange={(e) => mailEntered(e)} />
      {mailInvalid && <StyledAlert>Email is invalid.</StyledAlert>}

      <StyledLabel>Message:</StyledLabel>
      <StyledInput type="text" value={message} onChange={e => messageEntered(e)} />
      {messageInvalid && <StyledAlert>Message is invalid.</StyledAlert>}

      <StyledButton type="submit" disabled={!enabled}>Login</StyledButton>
    </StyledForm>
  )
}

export default ContactForm;