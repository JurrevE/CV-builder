import React from "react";

export default function ExperienceList({ experienceArray, removeExperience }) {
  return (
    <div className="experienceListContainer">
      {experienceArray.map((item, index) => (
        <div key={index} className="experienceListItem">
          <span>
            {item.Time} - {item.Position} at {item.Company}
          </span>
          <button
            className="removeButton"
            onClick={() => removeExperience(index)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
