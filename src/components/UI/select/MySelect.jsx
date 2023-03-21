import React from "react";

function MySelect({ defaultValue, options, value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option
        disabled={true}
        value=""
      >
        {defaultValue}
      </option>

      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default MySelect;
