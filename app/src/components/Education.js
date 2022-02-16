import React from "react";
import "./styles/Education.css";

const Education = ({ inputList, handleChange, add, remove }) => {
  return (
    <fieldset className="education">
      {inputList.map((input, index) => {
        return (
          <div className="education-form" key={index}>
            <div>
              <label htmlFor="schoolName">School</label>
              <input
                type="text"
                name="schoolName"
                id="schoolName"
                value={input.schoolName}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
            <div>
              <label htmlFor="degree">Degree</label>
              <input
                type="text"
                name="degree"
                id="degree"
                value={input.degree}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
            <div>
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={input.startDate}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
            <div>
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                value={input.endDate}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
            <button className="remove" type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        );
      })}
      <button type="button" onClick={() => add()}>
        Add Education
      </button>
    </fieldset>
  );
};

export default Education;
