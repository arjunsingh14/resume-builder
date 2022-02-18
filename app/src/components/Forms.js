import React, { useRef } from "react";
import { useState } from "react";
import ReactToPrint from "react-to-print";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Generate from "./Generate";
const Forms = () => {
  const [generate, setGenerate] = useState(false);
  const [project, setProjects] = useState([{
    project: "",
    projectDescription: "",
  }]);
  const [check, setCheck] = useState(true)
  const [skills, setSkills] = useState({
    language: "",
    technology: "",
  });
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
      gpa: "",
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
      description: "",
    },
  ]);
  const handlePersonalChange = (e) => {
    const personalTemp = { ...personal };
    personalTemp[e.target.name] = e.target.value;
    setPersonal(personalTemp);
  };
  const handleSkillChange = (e) => {
    const skillsTemp = { ...skills };
    skillsTemp[e.target.name] = e.target.value;
    setSkills(skillsTemp);
  };
  const handeEducationChange = (e, i) => {
    const list = [...educationList];
    list[i][e.target.name] = e.target.value;
    setEducation(list);
  };
  const handleProjectChange = (e, i) => {
    const list = [...project];
    list[i][e.target.name] = e.target.value;
    setProjects(list);
  };
  const addEducation = () => {
    const list = [
      ...educationList,
      { schoolName: "", degree: "", startDate: "", endDate: "" },
    ];
    setEducation(list);
  };
  const addProject = () => {
    const list = [...project, { project: "", projectDescription: "" }];
    setProjects(list);
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
  const removeProject = (index) => {
    if (project.length !== 1) {
      let list = [...project];
      list.splice(index, 1);
      setProjects(list);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGenerate(!generate);
    console.log(generate);
  };



  class ComponentToPrint extends React.PureComponent {
    render() {
      return (
        <Generate
          personal={personal}
          education={educationList}
          experience={experienceList}
          skill={skills}
          project={project}
          check={check}
          submit={handleSubmit}
        />
      );
    }
  }

  const Example = () => {
    const componentRef = useRef();

    return (
      <div>
        <ReactToPrint
          trigger={() => <button>Print Resume</button>}
          content={() => componentRef.current}
        />
        <ComponentToPrint ref={componentRef} />
      </div>
    );
  };

  return (
    <div>
      {!generate && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <section className="personal-sect">
            <h2>Personal Information</h2>
            <Personal personal={personal} onChange={handlePersonalChange} />
          </section>
          <section>
            <h2>Skills</h2>
            <Skills skill={skills} skillChange={handleSkillChange}></Skills>
          </section>
          <section>
            <h2>Projects</h2>
            <Projects
              add={addProject}
              handleChange={handleProjectChange}
              inputList={project}
              remove={removeProject}
            ></Projects>
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
          <label htmlFor="experience">Add experience</label>
          <input type="checkbox" onClick={() => setCheck(!check)}/>
          {!check && (<section>
            <h2>Experience</h2>
            <Experience
              inputList={experienceList}
              handleChange={handleExperienceChange}
              add={addExperience}
              remove={removeExperience}
            />
          </section>)}
          <button>Submit</button>
        </form>
      )}
      {generate && (
        <>
          <Example />
          <button onClick={(e) => handleSubmit(e)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Forms;
