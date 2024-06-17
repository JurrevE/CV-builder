import React from "react";

export default function Education({ formData, removeEducation }) {
  const educationArray = formData.educationArray;

  const removeEntry = (index) => {
    removeEducation(index);
  };

  return (
    <div className="educationSection">
      <div className="educationTitle">Education</div>
      {educationArray.map((item, index) => (
        <div key={index} className="educationEntry">
          <div>
            <strong>Time:</strong> {item.Time}
          </div>
          <div>
            <strong>School:</strong> {item.School}
          </div>
          <div>
            <strong>Degree:</strong> {item.Degree}
          </div>
          <div>
            <strong>Place:</strong> {item.Place}
          </div>
          {item.Notes && (
            <div>
              <strong>Notes:</strong> {item.Notes}
            </div>
          )}
        </div>
      ))}
      {educationArray.length === 0 && <div>No educations added yet.</div>}
    </div>
  );
}
