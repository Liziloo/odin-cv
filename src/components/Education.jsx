import { useState } from "react";
import CustomInput from "./CustomInput";

let nextId = 0;

function Education() {
  const [education, setEducation] = useState([]);
  const [editable, setEditable] = useState("true");
  const [currentSchoolId, setCurrentSchoolId] = useState("");

  function handleAddSchool(e) {
    e.preventDefault();
    const newSchoolName = document.getElementById("school-name").value;
    const newYears = document.getElementById("years").value;
    const newArea = document.getElementById("area").value;
    setEducation([
      ...education,
      { id: nextId++, name: newSchoolName, years: newYears, area: newArea },
    ]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEditable("false");
  }

  function handleSchoolEdit(e) {
    e.preventDefault();
    const schoolId = e.target.id;
    const school = education.filter((school) => school.id === schoolId);
    const schoolName = school.name;
    const schoolYears = school.years;
    const schoolArea = school.area;
    const newEducation = education.map((school) => {
      if (school.id !== schoolId) {
        return school;
      } else {
        return {
          ...school,
          name: schoolName,
          years: schoolYears,
          area: schoolArea,
        };
      }
    });
    setEducation(newEducation);
  }

  function handleSchoolDelete(e) {
    e.preventDefault();
    const deleteId = e.target.id;
    setEducation(education.filter(school => school.id !== deleteId));
  }

  if (editable === "true") {
    return (
      <section>
        <form onSubmit={handleAddSchool}>
          <CustomInput id="school-name" label="School Name" text="" />
          <CustomInput id="years" label="Years Attended:" text="" />
          <CustomInput id="area" label="Area of Study:" text="" />
          <button>Add School</button>
        </form>
        {education.map((school) => {
          return (
            <div class="school">
              <h2>{school.name}</h2>
              <h4>{school.years}</h4>
              <p>{school.area}</p>
              <button id={school.id} onClick={handleSchoolEdit}>
                Edit
              </button>
              <button id={school.id} onClick={handleSchoolDelete}>
                Delete
              </button>
            </div>
          );
        })}
        <button onClick={handleSubmit}>Done</button>
      </section>
    );
  }
}

export default Education;
