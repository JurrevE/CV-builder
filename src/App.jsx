import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Education from "./components/Education";

function App() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
  });

  const [educationData, setEducationData] = useState({
    Timespan: "",
    Degree: "",
    City: "",
    Organization: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleChangeEducation(event) {
    const { name, value } = event.target;
    setEducationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div className="App">
      <div className="userInputs">
        <div className="generalInputs">
          General information:
          <form className="generalInputForm">
            <div className="formGroup">
              <label htmlFor="Name">Firstname:</label>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                placeholder="Enter your firstname"
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

        <div className="educationInputs">
          Education information:
          <form className="EducationalInputForm">
            <div className="formGroup">
              <label htmlFor="Timespan">Timespan:</label>
              <input
                type="text"
                name="Timespan"
                value={educationData.Timespan}
                onChange={handleChangeEducation}
                placeholder="Enter the years that you studied"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="Degree">Degree:</label>
              <input
                type="text"
                name="Degree"
                value={educationData.Degree}
                onChange={handleChangeEducation}
                placeholder="Enter what degree you studied"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="City">City:</label>
              <input
                type="text"
                name="City"
                value={educationData.City}
                onChange={handleChangeEducation}
                placeholder="Enter where you studied"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="Organization">Organization:</label>
              <input
                type="text"
                name="Organization"
                value={educationData.Organization}
                onChange={handleChangeEducation}
                placeholder="Enter the name of your Organization"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="CV">
        <Header
          name={formData.Name}
          email={formData.Email}
          phone={formData.Phone}
          address={formData.Address}
        />
        <Education />
      </div>
    </div>
  );
}

export default App;
