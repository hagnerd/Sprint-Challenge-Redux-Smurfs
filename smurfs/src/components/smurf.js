import React from "react";

export default function Smurf({ name, age, height }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl mb-2 text-gray-800">{name}</h2>
      <p className="text-sm font-medium text-gray-600">
        {height} tall - {age} years old
      </p>
    </div>
  );
}
