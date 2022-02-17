import React from "react";
import "./styles/Generate.css";
const Generate = ({ education, experience, personal, skill, project, check }) => {
  const { firstName, lastName, linkedin, github, number, email } = personal;
  return (
    <article className="resume">
      <section className="personal-display">
        <h1 className="first-last-name">
          {firstName} {lastName}
        </h1>
        <div className="contacts">
          <span className="contact">{number}</span>
          <span className="contact web">{email}</span>
          <span className="contact web">{github}</span>
          <span className="contact web">{linkedin}</span>
        </div>
      </section>
      <section className="project-display">
        <h2 className="projects">Projects</h2>
        {project.map((proj, index) => {
          return (
          <div className="project-container" key={index}>
            <p>{proj.project}</p>
            <p>{proj.projectDescription}</p>
          </div>
          );
        })}
      </section>
      <section className="skills-display">
        <h2 className="skills">Skills</h2>
        <div className="skills-container">
          <p>
            <b>Languages:</b> {skill.language}
          </p>
          <p>
            <b>Technologies:</b> {skill.technology}
          </p>
        </div>
      </section>
      <section className="education-display">
        <h2>Education</h2>
        {education.map((edu, index) => {
          return (
            <div key={index}>
              <div>
                <p>
                  {edu.schoolName} | {edu.degree}
                </p>
                <p>
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
              <p>GPA: {edu.gpa}/4.0</p>
              <p>Award: {edu.awards}</p>
            </div>
          );
        })}
      </section>
      {!check && <section className="experience-display">
        <h2>Experience</h2>
        {experience.map((exp, index) => {
          return (
            <div key={index}>
              <div className="experience-top">
                <p>{exp.experience}</p>
                <p>
                  {exp.startDate}-{exp.endDate}
                </p>
              </div>
              <div className="experience-bottom">
                <p>{exp.description}</p>
              </div>
            </div>
          );
        })}
      </section>}
    </article>
  );
};

export default Generate;
