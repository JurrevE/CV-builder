import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";

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
        <form className="generalInputForm">
          <label htmlFor="Name">
            Firstname:
            <input
              type="text"
              name="Name"
              value={FormData.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="Email">
            Email:
            <input
              type="Email"
              name="Email"
              value={FormData.Email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="Phone Number:">
            Phone Number:
            <input
              type="tel"
              name="Phone"
              value={FormData.Phone}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="Adress">
            Adress:
            <input
              type="text"
              name="Adress"
              value={FormData.Adress}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>

      <div className="CV">
        <Header
          name={FormData.Name}
          email={FormData.Email}
          phone={FormData.Phone}
          adress={FormData.Adress}
        />
      </div>
    </div>
  );
}

export default App;
