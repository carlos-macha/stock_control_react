import React from "react";
import "./Input.css";

export default function Input(
  { label, type = "text", value, onChange, icon: Icon },
) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <div className="input-wrapper">
        <input type={type} value={value} onChange={onChange} />
        {Icon && <Icon className="input-icon" />}
      </div>
    </div>
  );
}
