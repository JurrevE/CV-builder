import React from "react";

export default function ExperienceInfoForm({
  formData,
  handleExperienceChange,
}) {
  return (
    <div className="experienceInputs">
      <form className="experienceInputForm">
        <div className="formGroup">
          <label htmlFor="Time">Time:</label>
          <input
            type="text"
            name="experienceTime"
            value={formData.experienceTime}
            onChange={handleExperienceChange}
            placeholder="Enter the time period"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="Position">Position:</label>
          <input
            type="text"
            name="experiencePosition"
            value={formData.experiencePosition}
            onChange={handleExperienceChange}
            placeholder="Enter your position"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="Company">Company:</label>
          <input
            type="text"
            name="experienceCompany"
            value={formData.experienceCompany}
            onChange={handleExperienceChange}
            placeholder="Enter the company name"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="Location">Location:</label>
          <input
            type="text"
            name="experienceLocation"
            value={formData.experienceLocation}
            onChange={handleExperienceChange}
            placeholder="Enter the location"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="Notes">Notes:</label>
          <textarea
            name="experienceNotes"
            value={formData.experienceNotes}
            onChange={handleExperienceChange}
            placeholder="Write something about your experience..."
          />
        </div>
      </form>
    </div>
  );
}
