import React from "react";
import './styles/Personal.css'

const Personal = ({onChange}) => {
  return (
    <fieldset className="personal-info">
      <div className="firstname">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="lastname">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone number</label>
        <input
          type="text"
          id="phoneNumber"
          name="number"
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        <label htmlFor="github">Github</label>
        <input
          type="text"
          id="github"
          name="github"
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        <label htmlFor="linkedin">Linkedin</label>
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          onChange={(e) => onChange(e)}
        />
      </div>
    </fieldset>
  );
};

export default Personal;
