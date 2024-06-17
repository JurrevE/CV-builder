import React from "react";

export default function Experience({ formData, removeExperience }) {
  const experienceArray = formData.experienceArray;

  return (
    <div className="experienceSection">
      <div className="experienceTitle">Experience</div>
      {experienceArray.map((item, index) => (
        <div key={index} className="experienceEntry">
          <div>
            <strong>Time:</strong> {item.Time}
          </div>
          <div>
            <strong>Position:</strong> {item.Position}
          </div>
          <div>
            <strong>Company:</strong> {item.Company}
          </div>
          <div>
            <strong>Location:</strong> {item.Location}
          </div>
          {item.Notes && (
            <div>
              <strong>Notes:</strong> {item.Notes}
            </div>
          )}
        </div>
      ))}
      {experienceArray.length === 0 && <div>No experiences added yet.</div>}
    </div>
  );
}
