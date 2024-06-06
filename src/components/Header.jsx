import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <h1>{props.name}</h1>
      <h3>{props.email}</h3>
      <h3>{props.phone}</h3>
      <h3>{props.adress}</h3>
    </div>
  );
}
