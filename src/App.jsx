import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import GeneralInfoForm from "./components/GeneralInfoForm";
import Education from "./components/Education";
import EducationInfoForm from "./components/EducationInfoForm";
import EducationList from "./components/EducationList";

function App() {
  const [formData, setFormData] = useState({
    personalDetails: { Name: "", Email: "", Phone: "", Address: "" },
    educationArray: [],
    experienceArray: [],
    educationTime: "",
    educationSchool: "",
    educationDegree: "",
    educationPlace: "",
    educationNotes: "", // Added educationNotes field
  });

  const [activeTab, setActiveTab] = useState("personal");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      personalDetails: {
        ...prevData.personalDetails,
        [name]: value,
      },
    }));
  }

  function handleEducationChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function addEducation() {
    const newEducation = {
      Time: formData.educationTime,
      School: formData.educationSchool,
      Degree: formData.educationDegree,
      Place: formData.educationPlace,
      Notes: formData.educationNotes, // Include notes in education entry
    };

    setFormData((prevData) => ({
      ...prevData,
      educationArray: [...prevData.educationArray, newEducation],
      educationTime: "",
      educationSchool: "",
      educationDegree: "",
      educationPlace: "",
      educationNotes: "", // Clear notes after adding
    }));
  }

  function removeEducation(index) {
    setFormData((prevData) => ({
      ...prevData,
      educationArray: prevData.educationArray.filter((_, idx) => idx !== index),
    }));
  }

  const switchToPersonalTab = () => {
    setActiveTab("personal");
  };

  const switchToEducationTab = () => {
    setActiveTab("education");
  };

  return (
    <div className="App">
      <div className="tabs">
        <button onClick={switchToPersonalTab}>Personal Information</button>
        <button onClick={switchToEducationTab}>Education</button>
        {activeTab === "education" && (
          <EducationList
            educationArray={formData.educationArray}
            removeEducation={removeEducation}
          />
        )}
      </div>

      <div className="tabContent">
        <div className="userInputs">
          {activeTab === "personal" && (
            <GeneralInfoForm
              formData={formData.personalDetails}
              handleChange={handleChange}
            />
          )}
          {activeTab === "education" && (
            <EducationInfoForm
              formData={{
                educationTime: formData.educationTime,
                educationSchool: formData.educationSchool,
                educationDegree: formData.educationDegree,
                educationPlace: formData.educationPlace,
                educationNotes: formData.educationNotes,
              }}
              handleEducationChange={handleEducationChange}
            />
          )}
          {activeTab === "education" && (
            <button type="button" onClick={addEducation}>
              Add Education
            </button>
          )}
        </div>
      </div>

      <div className="CV">
        <Header
          name={formData.personalDetails.Name}
          email={formData.personalDetails.Email}
          phone={formData.personalDetails.Phone}
          address={formData.personalDetails.Address}
        />
        <Education formData={formData} removeEducation={removeEducation} />
      </div>
    </div>
  );
}

export default App;
