
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";

function CvForm() {

  return (
    <div className="container">
      <div className="background-div">
        <h1>Your CV</h1>
          <Contact />
          <Education />
          <Experience />
      </div>
    </div>
  )
}

export default CvForm