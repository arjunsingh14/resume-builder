import React from "react";
import "./styles/Project.css";

const Projects = ({ add, handleChange, inputList, remove }) => {
  return (
    <fieldset>
      {inputList.map((input, index) => {
        return (
          <div className="projects" key={index}>
              <label htmlFor="project">Project</label>
              <input
                type="text"
                name="project"
                id="project"
                value={input.project}
                onChange={(e) => handleChange(e, index)}
              />
        
              <label htmlFor="projectDescription">Description</label>
              <textarea
                name="projectDescription"
                id="projectDescription"
                cols="50"
                rows="4"
                value={input.projectDescription}
                onChange={(e) => handleChange(e, index)}
              ></textarea>
              <button
                className="proj-button"
                type="button"
                onClick={() => remove(index)}
              >
                Remove
              </button>
          </div>
        );
      })}
      )
      <button type="button" onClick={() => add()}>
        Add Project
      </button>
    </fieldset>
  );
};

export default Projects;
