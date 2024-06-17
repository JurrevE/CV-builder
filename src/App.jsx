import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import GeneralInfoForm from "./components/GeneralInfoForm";
import Education from "./components/Education";
import EducationInfoForm from "./components/EducationInfoForm";
import EducationList from "./components/EducationList";
import Experience from "./components/Experience"; // New component
import ExperienceInfoForm from "./components/ExperienceInfoForm"; // New component
import ExperienceList from "./components/ExperienceList"; // New component

function App() {
  const [formData, setFormData] = useState({
    personalDetails: { Name: "", Email: "", Phone: "", Address: "" },
    educationArray: [],
    experienceArray: [], // New array for experiences
    educationTime: "",
    educationSchool: "",
    educationDegree: "",
    educationPlace: "",
    educationNotes: "",
    experienceTime: "", // New fields for experience
    experiencePosition: "",
    experienceCompany: "",
    experienceLocation: "",
    experienceNotes: "",
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

  function handleExperienceChange(event) {
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
      Notes: formData.educationNotes,
    };

    setFormData((prevData) => ({
      ...prevData,
      educationArray: [...prevData.educationArray, newEducation],
      educationTime: "",
      educationSchool: "",
      educationDegree: "",
      educationPlace: "",
      educationNotes: "",
    }));
  }

  function addExperience() {
    const newExperience = {
      Time: formData.experienceTime,
      Position: formData.experiencePosition,
      Company: formData.experienceCompany,
      Location: formData.experienceLocation,
      Notes: formData.experienceNotes,
    };

    setFormData((prevData) => ({
      ...prevData,
      experienceArray: [...prevData.experienceArray, newExperience],
      experienceTime: "",
      experiencePosition: "",
      experienceCompany: "",
      experienceLocation: "",
      experienceNotes: "",
    }));
  }

  function removeEducation(index) {
    setFormData((prevData) => ({
      ...prevData,
      educationArray: prevData.educationArray.filter((_, idx) => idx !== index),
    }));
  }

  function removeExperience(index) {
    setFormData((prevData) => ({
      ...prevData,
      experienceArray: prevData.experienceArray.filter(
        (_, idx) => idx !== index
      ),
    }));
  }

  const switchToPersonalTab = () => {
    setActiveTab("personal");
  };

  const switchToEducationTab = () => {
    setActiveTab("education");
  };

  const switchToExperienceTab = () => {
    setActiveTab("experience");
  };

  return (
    <div className="App">
      <div className="tabs">
        <button onClick={switchToPersonalTab}>Personal Information</button>
        <button onClick={switchToEducationTab}>Education</button>
        <button onClick={switchToExperienceTab}>Experience</button>
        {activeTab === "education" && (
          <EducationList
            educationArray={formData.educationArray}
            removeEducation={removeEducation}
          />
        )}
        {activeTab === "experience" && (
          <ExperienceList
            experienceArray={formData.experienceArray}
            removeExperience={removeExperience}
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
          {activeTab === "experience" && (
            <ExperienceInfoForm
              formData={{
                experienceTime: formData.experienceTime,
                experiencePosition: formData.experiencePosition,
                experienceCompany: formData.experienceCompany,
                experienceLocation: formData.experienceLocation,
                experienceNotes: formData.experienceNotes,
              }}
              handleExperienceChange={handleExperienceChange}
            />
          )}
          {activeTab === "education" && (
            <button type="button" onClick={addEducation}>
              Add Education
            </button>
          )}
          {activeTab === "experience" && (
            <button type="button" onClick={addExperience}>
              Add Experience
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
        <Experience formData={formData} removeExperience={removeExperience} />
      </div>
    </div>
  );
}

export default App;
