import { useState } from "react";
import Contact from "./Contact";
import Education from "./Education";

function CvForm() {


  const [experience, setExperience] = useState([]);

  return (
    <>
        <Contact />
        <Education />
    
    </>
  )
}

export default CvForm