import React from "react";
import "./styles/Experience.css";

const Experience = ({ inputList, handleChange, add, remove }) => {
  return (
    <fieldset>
      {inputList.map((input, index) => {
        return (
          <div className="experience" key={index}>
            <label htmlFor="experience">Experience</label>
            <input
              type="text"
              name="experience"
              id="experience"
              value={input.experience}
              onChange={(e) => handleChange(e, index)}
            />
            <label htmlFor="startDate">Start Date</label>
            <input
              type="text"
              name="startDate"
              id="startDate"
              value={input.startDate}
              onChange={(e) => handleChange(e, index)}
            />
            <label htmlFor="endDate">End Date</label>
            <input
              type="text"
              name="endDate"
              id="endDate"
              value={input.endDate}
              onChange={(e) => handleChange(e, index)}
            />
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              value={input.description}
              onChange={(e) => handleChange(e, index)}
            ></textarea>
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        );
      })}
      )
      <button type="button" onClick={() => add()}>
        Add Education
      </button>
    </fieldset>
  );
};

export default Experience;
