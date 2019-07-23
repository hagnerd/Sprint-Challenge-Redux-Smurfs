import React from "react";

export default function Input(props) {
  return (
    <input
      className="bg-gray-200 py-1 px-3 rounded border border-gray-300 text-gray-800"
      {...props}
    />
  );
}
