import React from "react";
import { useState } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Generate from "./Generate";
const Forms = () => {
  const [generate, setGenerate] = useState(false);
  const [personal, setPersonal] = useState({
    firstName: "",
    lastName: "",
    linkedin: "",
    github: "",
    number: "",
    email: "",
  });
  const [educationList, setEducation] = useState([
    {
      schoolName: "",
      degree: "",
      gpa:"",
      awards: "",
      startDate: "",
      endDate: "",
    },
  ]);
  const [experienceList, setExperience] = useState([
    {
      experience: "",
      startDate: "",
      endDate: "",
      description:"",
    },
  ]);
  const handlePersonalChange = (e) => {
    const personalTemp = { ...personal };
    personalTemp[e.target.name] = e.target.value;
    setPersonal(personalTemp);
  };
  const handeEducationChange = (e, i) => {
    const list = [...educationList];
    list[i][e.target.name] = e.target.value;
    setEducation(list);
  };
  const addEducation = () => {
    const list = [
      ...educationList,
      { schoolName: "", degree: "", startDate: "", endDate: "" },
    ];
    setEducation(list);
  };

  const removeEducation = (index) => {
    if (educationList.length !== 1) {
      let list = [...educationList];
      list.splice(index, 1);
      setEducation(list);
    }
  };
  const handleExperienceChange = (e, i) => {
    const list = [...experienceList];
    list[i][e.target.name] = e.target.value;
    setExperience(list);
  };
  const addExperience = () => {
    const list = [
      ...experienceList,
      { schoolName: "", degree: "", startDate: "", endDate: "" },
    ];
    setExperience(list);
  };

  const removeExperience = (index) => {
    if (experienceList.length !== 1) {
      let list = [...experienceList];
      list.splice(index, 1);
      setExperience(list);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGenerate(!generate);
    console.log(generate);
  };

  return (
    <div>
      {!generate && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <section className="personal-sect">
            <h2>Personal Information</h2>
            <Personal personal={personal} onChange={handlePersonalChange} />
          </section>
          <section className="edu-sect">
            <h2>Education</h2>
            <Education
              inputList={educationList}
              handleChange={handeEducationChange}
              add={addEducation}
              remove={removeEducation}
            />
          </section>
          <section>
            <h2>Experience</h2>
            <Experience
              inputList={experienceList}
              handleChange={handleExperienceChange}
              add={addExperience}
              remove={removeExperience}
            />
          </section>
          <button>Submit</button>
          {generate && (
            <Generate Education={educationList} Experience={experienceList} />
          )}
        </form>
      )}
      {generate && (
        <Generate
          personal={personal}
          education={educationList}
          experience={experienceList}
          submit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Forms;
