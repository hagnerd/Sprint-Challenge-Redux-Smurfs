import React from "react";

export default function Smurf({ name, age, height }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        {height} - {age} years old
      </p>
    </div>
  );
}
