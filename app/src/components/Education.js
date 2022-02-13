import React from "react";

const Education = ({ inputList, handleChange, add, remove }) => {
  return (
    <fieldset>
      {inputList.map((input, index) => {
        return (
          <fieldset key={index}>
            <label htmlFor="schoolName">School</label>
            <input
              type="text"
              name="schoolName"
              id="schoolName"
              value={input.schoolName}
              onChange={(e) => handleChange(e, index)}
            />
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              name="degree"
              id="degree"
              value={input.degree}
              onChange={(e) => handleChange(e, index)}
            />
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              value={input.startDate}
              onChange={(e) => handleChange(e, index)}
            />
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={input.endDate}
              onChange={(e) => handleChange(e, index)}
            />
            <button type="button" onClick={() => remove(index)}>Remove</button>
          </fieldset>
        );
      })}
      )<button type="button" onClick={() => add()}>Add Education</button>
    </fieldset>
  );
};

export default Education;
