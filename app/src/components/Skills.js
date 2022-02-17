import React from "react";

const Skills = ({skill, skillChange}) => {
  return (
    <fieldset>
      <label htmlFor="languages">Languages</label>
      <input
        type="text"
        id="languages"
        name="language"
        value={skill.language}
        onChange={(e) => skillChange(e)}
      />
      <label htmlFor="technology">Technologies</label>
      <input
        type="text"
        id="technology"
        name="technology"
        value={skill.technology}
        onChange={(e) => skillChange(e)}
      />
    </fieldset>
  );
};

export default Skills;
