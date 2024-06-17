import React from "react";

export default function GeneralInfoForm({ formData, handleChange }) {
  return (
    <div className="generalInputs">
      General information:
      <form className="generalInputForm">
        <div className="formGroup">
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="Phone">Phone Number:</label>
          <input
            type="tel"
            name="Phone"
            value={formData.Phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="Address">Address:</label>
          <input
            type="text"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            placeholder="Enter your address"
          />
        </div>
      </form>
    </div>
  );
}
