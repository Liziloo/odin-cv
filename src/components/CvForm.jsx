
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";

function CvForm() {

  return (
    <div className="container">
      <h1>Your CV</h1>
        <Contact />
        <Education />
        <Experience />
    </div>
  )
}

export default CvForm