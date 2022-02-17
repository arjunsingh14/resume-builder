import React from "react";
import './styles/Personal.css'

const Personal = ({personal,  onChange}) => {
  return (
    <fieldset className="personal-info">
      <div className="firstname">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={personal.firstName}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="lastname">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={personal.lastName}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={personal.email}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone number</label>
        <input
          type="text"
          id="phoneNumber"
          name="number"
          value={personal.number}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        <label htmlFor="github">Github</label>
        <input
          type="text"
          id="github"
          name="github"
          value={personal.github}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        <label htmlFor="linkedin">Linkedin</label>
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          value={personal.linkedin}
          onChange={(e) => onChange(e)}
        />
      </div>
    </fieldset>
  );
};

export default Personal;
