import React from "react";
import "./styles/Skills.css";
const Skills = ({ skill, skillChange }) => {
  return (
    <fieldset id="skills">
      <div>
        <label htmlFor="languages">Languages</label>
        <input
          type="text"
          id="languages"
          name="language"
          value={skill.language}
          onChange={(e) => skillChange(e)}
        />
      </div>
      <div>
        <label htmlFor="technology">Technologies</label>
        <input
          type="text"
          id="technology"
          name="technology"
          value={skill.technology}
          onChange={(e) => skillChange(e)}
        />
      </div>
    </fieldset>
  );
};

export default Skills;
