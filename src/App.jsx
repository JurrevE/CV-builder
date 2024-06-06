import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Education from "./components/Education";
function App() {
  const [FormData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Adress: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
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
                value={FormData.name}
                onChange={handleChange}
                placeholder="Enter your firstname"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="Email">Email:</label>
              <input
                type="email"
                name="Email"
                value={FormData.Email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="Phone">Phone Number:</label>
              <input
                type="tel"
                name="Phone"
                value={FormData.Phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="Address">Address:</label>
              <input
                type="text"
                name="Address"
                value={FormData.Address}
                onChange={handleChange}
                placeholder="Enter your address"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="CV">
        <Header
          name={FormData.Name}
          email={FormData.Email}
          phone={FormData.Phone}
          adress={FormData.Adress}
        />
        <Education />
      </div>
    </div>
  );
}

export default App;
