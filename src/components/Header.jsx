import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <h1 className="fullname">{props.name || "Jurre van Eijk"}</h1>
      <div className="otherinfo">
        <h3 className="otherinfoh3">{props.email || "yourmom@gmail.com"}</h3>
        <h3 className="otherinfoh3">{props.phone || "06 16294209"}</h3>
        <h3 className="otherinfoh3">
          {props.address || "Maasstraat 123, 1823XG Alkmaar"}
        </h3>
      </div>
    </div>
  );
}
