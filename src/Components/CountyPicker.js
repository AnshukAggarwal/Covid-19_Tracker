import React from "react";

function CountryPicker({ data, handleChange }) {
  if (!data) {
    return "Loading...";
  }
  return (
    <div className="selectbox input-group mb-3 country-picker">
      <select
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      >
        <option value="Global" defaultValue="Global">
          Global
        </option>
        {data.map((c, i) => (
          <option key={i} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}
export default CountryPicker;
