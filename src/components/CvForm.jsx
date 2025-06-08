import { useState } from "react";
import Contact from "./Contact";

function CvForm() {

  
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <>
        <Contact />
    </>
  )
}

export default CvForm