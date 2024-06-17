import React from "react";

export default function EducationInfoForm({ formData, handleEducationChange }) {
  return (
    <div className="educationInputs">
      <form className="educationInputForm">
        <div className="formGroup">
          <label htmlFor="Time">Time:</label>
          <input
            type="text"
            name="educationTime"
            value={formData.educationTime}
            onChange={handleEducationChange}
            placeholder="Enter the time you studied"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="School">School:</label>
          <input
            type="text"
            name="educationSchool"
            value={formData.educationSchool}
            onChange={handleEducationChange}
            placeholder="Enter your school"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="Degree">Degree:</label>
          <input
            type="text"
            name="educationDegree"
            value={formData.educationDegree}
            onChange={handleEducationChange}
            placeholder="Enter your degree"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="Place">Place:</label>
          <input
            type="text"
            name="educationPlace"
            value={formData.educationPlace}
            onChange={handleEducationChange}
            placeholder="Enter the place you studied at"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="Notes">Notes:</label>
          <textarea
            name="educationNotes"
            value={formData.educationNotes}
            onChange={handleEducationChange}
            placeholder="Write something about your education..."
          />
        </div>
      </form>
    </div>
  );
}
