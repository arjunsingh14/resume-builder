import React from "react";
import './styles/Generate.css'
const Generate = ({ education, experience, personal }) => {
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
      <section className="education-display">
        <h2>Education</h2>
        {education.map((edu, index) => {
          return (
            <div>
              <p>{edu.schoolName} | {edu.degree}</p>
              <p>{edu.startDate} - {edu.endDate}</p>
            </div>
          );
        })}
      </section>
      <section>
        <h2>Experience</h2>
        {experience.map((exp, index) => {
          return (
            <div>
              <span>{exp.experience}</span>
              <span>{exp.startDate}</span>
              <span>{exp.endDate}</span>
              <p>{exp.description}</p>
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default Generate;
