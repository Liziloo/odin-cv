import { useState } from "react";
import CustomInput from "./CustomInput";
import CustomTextarea from "./customTextarea";

let nextId = 0;

function Experience() {
    const [experience, setExperience] = useState([]);
  const [editData, setEditData] = useState({editable: true, currentExperienceId: ''});

  function handleSubmit(e) {
    e.preventDefault();
    const newCompany = document.getElementById("company-name").value;
    const newPosition = document.getElementById('company-position').value;
    const newYears = document.getElementById("company-years").value;
    const newResponsibilities = document.getElementById("company-responsibilities").value;
    if (editData.currentExperienceId === '') {
        setExperience([
          ...experience,
          { id: nextId++, company: newCompany, position: newPosition, years: newYears, responsibilities: newResponsibilities }
        ]);
        } else {
        setExperience(experience.map(ex => {
          if (ex.id === parseInt(editData.currentExperienceId)) {
            return {...ex, company: newCompany, position: newPosition, years: newYears, responsibilities: newResponsibilities}
          } else {
            return ex;
          }
        }))
      }
    
    setEditData({editable: false, currentExperienceId: ''});
  }

  function handleEditButton(e) {
    e.preventDefault();
    const editingExperienceID = e.target.dataset.experienceId;
    setEditData({editable: true, currentExperienceId: editingExperienceID});
  }

  function handleSchoolDelete(e) {
    e.preventDefault();
    const deleteId = parseInt(e.target.dataset.experienceId);
    setExperience(experience.filter(ex => ex.id !== deleteId));
  }

  function handleAddExperience(e) {
    e.preventDefault();
    setEditData({editable: true, currentExperienceId: ''});
  }

  if (editData.editable === true) {
    let company = '';
    let position = '';
    let years = '';
    let responsibilities = '';
    if (editData.currentExperienceId !== '') {
      const experienceToEdit = experience.filter(ex => ex.id === parseInt(editData.currentExperienceId));
      company = experienceToEdit[0].company;
      position = experienceToEdit[0].position;
      years = experienceToEdit[0].years;
      responsibilities = experienceToEdit[0].responsibilities;
    }
    return (
      <section className="experience edit">
        <form onSubmit={handleSubmit}>
          <div className="row">
              <CustomInput id="company-name" label="Company/Organization:" text={company} />
              <div className="col"></div>
          </div>
          <div className="row">
              <CustomInput id='company-position' label='Position:' text={position} />
              <CustomInput id="company-years" label="Years Employed:" text={years} />
          </div>
          <div className="row">
              <CustomTextarea id="company-responsibilities" label="Responsibilities:" text={responsibilities} />
              <div className="col"></div>
          </div>
          <button>Submit</button>
        </form>

        {experience.length > 0 ? 
          experience.map((ex) => {
            return (
              <div key={ex.id} className="company">
                <h2>{ex.company}</h2>
                <h3>{ex.position}</h3>
                <h4>{ex.years}</h4>
                <p>{ex.responsibilities}</p>
              </div>
            );
          }) : null}
      </section>
    )
  } else {
    return (
      <section className="experience filled">
        {experience.map((ex) => {
            return (
              <div key={ex.id} className="company">
                <h2>{ex.company}</h2>
                <h3>{ex.position}</h3>
                <h4>{ex.years}</h4>
                <p>{ex.responsibilities}</p>
                <button className="edit" data-experience-id={ex.id} onClick={handleEditButton}>
                  Edit
                </button>
                <button className="delete" data-experience-id={ex.id} onClick={handleSchoolDelete}>
                  Delete
                </button>
              </div>
            );
          })}
          <button className="add" onClick={handleAddExperience}>Add Experience</button>
      </section>
    )
  }
};

export default Experience;