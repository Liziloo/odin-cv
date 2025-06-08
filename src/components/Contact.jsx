import { useState } from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

function Contact() {
  const [editable, setEditable] = useState(true);
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });

  if (editable) {
    return (
        <>
            <Input id='first-name' label='First Name:' />
            <Input id='last-name' label='Last Name:' />
            <Input id='phone' label='Phone Number:' />
            <Input id='email' label='Email:' />
            <SubmitButton />
        </>
    )
    }
  
}

export default Contact