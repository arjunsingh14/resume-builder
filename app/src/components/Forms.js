import React from "react";
import { useState } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Generate from "./Generate";
const Forms = () => {
  const [generate, setGenerate] = useState(true);
  const [personal, setPersonal] = useState({
    firstName: "Arjun",
    lastName: "Bhandal",
    linkedin: "linkedin.com",
    github: "github.com",
    number: "6478391406",
    email: "arjunsingh140601@gmail.com",
  });
  const [educationList, setEducation] = useState([
    { schoolName: "Ryerson University", degree: "BSc in Computer Science", startDate: "September 2021", endDate: "May 2026" },
  ]);
  const [experienceList, setExperience] = useState([
    {
      experience: "Unemployed",
      startDate: "June 2001",
      endDate: "Febuary 2022",
      description: "Just jobless lololololol",
    },
    {
      experience: "Unemployed",
      startDate: "June 2001",
      endDate: "Febuary 2022",
      description: "Just jobless lololololol",
    },
    {
      experience: "Unemployed",
      startDate: "June 2001",
      endDate: "Febuary 2022",
      description: "Just jobless lololololol",
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
            <Personal {...personal} onChange={handlePersonalChange}/>
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
