import React from "react";

const Personal = () => {
  return (
    <fieldset>
      <div className="firstname">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" />
      </div>
      <div className="lastname">
        <label htmlFor="lastName">Last name</label>
        <input type="text" id="lastName" name="lastName" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone number</label>
        <input type="text" id="phoneNumber" name="phoneNumber" />
      </div>
      <div>
        <label htmlFor="github">Github</label>
        <input type="text" id="github" name="github" />
      </div>
      <div>
        <label htmlFor="linkedin">Linkedin</label>
        <input type="text" id="linkedin" name="linkedin" />
      </div>
    </fieldset>
  );
};

export default Personal;
