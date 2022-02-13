import React from "react";
import { useState } from "react";
import "./styles/Form.css";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
const Forms = () => {
  const [educationList, setEducation] = useState([
    { schoolName: "", degree: "", startDate: "", endDate: "" },
  ]);
  const [experienceList, setExperience] = useState([
    { experience: "", startDate: "", endDate: "", description: "" },
  ]);
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
  return (
    <form>
      <section>
        <h2>Personal Information</h2>
        <Personal />
      </section>
      <section>
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
    </form>
  );
};

export default Forms;
