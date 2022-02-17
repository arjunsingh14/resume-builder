import React from 'react'

const Projects = ({ add, handleChange, inputList, remove }) => {
  return (
    <fieldset>
      {inputList.map((input, index) => {
        return (
          <div className="projects" key={index}>
            <label htmlFor="project">Experience</label>
            <input
              type="text"
              name="project"
              id="project"
              value={input.experience}
              onChange={(e) => handleChange(e, index)}
            />
            <label htmlFor="description">Description</label>
            <textarea
              name="projectDescription"
              id="projectDescription"
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
        Add Experience
      </button>
    </fieldset>
  );
}

export default Projects