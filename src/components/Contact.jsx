import { useState } from "react";
import CustomInput from "./CustomInput";

function Contact() {
  const [editable, setEditable] = useState("true");
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newFirstName = document.getElementById("first-name").value;
    const newLastName = document.getElementById("last-name").value;
    const newPhone = document.getElementById("phone").value;
    const newEmail = document.getElementById("email").value;
    setContact({
      firstName: newFirstName,
      lastName: newLastName,
      phone: newPhone,
      email: newEmail,
    });
    setEditable("false");
  }

  function handleEdit(e) {
    e.preventDefault();
    setEditable("true");
  }

  if (editable === "true") {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <CustomInput
            id="first-name"
            label="First Name:"
            text={contact.firstName}
          />
          <CustomInput
            id="last-name"
            label="Last Name:"
            text={contact.lastName}
          />
          <CustomInput id="phone" label="Phone Number:" text={contact.phone} />
          <CustomInput id="email" label="Email:" text={contact.email} />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <h1>
          {contact.firstName} {contact.lastName}
        </h1>
        <h4>
          {contact.phone} {contact.email}
        </h4>
        <button onClick={handleEdit}>Edit</button>
      </>
    );
  }
}

export default Contact;
