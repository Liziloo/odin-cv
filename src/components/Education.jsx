import { useState } from "react";
import CustomInput from "./CustomInput";

let nextId = 0;

function Education() {
  const [education, setEducation] = useState([]);
  const [editData, setEditData] = useState({editable: true, currentSchoolId: ''});

  function handleSubmit(e) {
    e.preventDefault();
    const newSchoolName = document.getElementById("school-name").value;
    const newYears = document.getElementById("years").value;
    const newArea = document.getElementById("area").value;
    if (editData.currentSchoolId === '') {
    setEducation([
          ...education,
          { id: nextId++, name: newSchoolName, years: newYears, area: newArea }
        ]);
      } else {
        setEducation(education.map(school => {
          if (school.id === parseInt(editData.currentSchoolId)) {
            return {...school, name: newSchoolName, years: newYears, area: newArea}
          } else {
            return school;
          }
        }))
      }
    
    setEditData({editable: false, currentSchoolId: ''});
  }

  function handleEditButton(e) {
    e.preventDefault();
    const editingSchoolId = e.target.dataset.schoolId;
    setEditData({editable: true, currentSchoolId: editingSchoolId});
  }

  function handleSchoolDelete(e) {
    e.preventDefault();
    const deleteId = e.target.id;
    setEducation(education.filter(school => school.id !== deleteId));
  }

  function handleAddSchool(e) {
    e.preventDefault();
    setEditData({editable: true, currentSchoolId: ''});
  }

  if (editData.editable === true) {
    let schoolName = '';
    let schoolArea = '';
    let schoolYears = '';
    if (editData.currentSchoolId !== '') {
      const schoolToEdit = education.filter(school => school.id === parseInt(editData.currentSchoolId));
      schoolName = schoolToEdit[0].name;
      schoolYears = schoolToEdit[0].years;
      schoolArea = schoolToEdit[0].area;
    }
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <CustomInput id="school-name" label="School Name" text={schoolName} />
          <CustomInput id="years" label="Years Attended:" text={schoolArea} />
          <CustomInput id="area" label="Area of Study:" text={schoolYears} />
          <button>Submit</button>
        </form>

        {education.length > 0 ? 
          education.map((school) => {
            return (
              <div key={school.id} className="school">
                <h2>{school.name}</h2>
                <h4>{school.years}</h4>
                <p>{school.area}</p>
              </div>
            );
          }) : null}
      </section>
    )
  } else {
    return (
      <section>
        {education.map((school) => {
            return (
              <div key={school.id} className="school">
                <h2>{school.name}</h2>
                <h4>{school.years}</h4>
                <p>{school.area}</p>
                <button data-school-id={school.id} onClick={handleEditButton}>
                  Edit
                </button>
                <button  data-school-id={school.id} onClick={handleSchoolDelete}>
                  Delete
                </button>
              </div>
            );
          })}
          <button onClick={handleAddSchool}>Add School</button>
      </section>
    )
  }
}

export default Education;
