import React from "react";

export default function EducationList({ educationArray, removeEducation }) {
  return (
    <div className="educationListContainer">
      {educationArray.map((item, index) => (
        <div key={index} className="educationListItem">
          <span>
            {item.Time} - {item.School}
          </span>
          <button
            className="removeButton"
            onClick={() => removeEducation(index)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
