import React from "react";

function CheckboxSauce({ sauce, onChecked, selectedSauces }) {
  return (
    <div className="col-4 mb-3">
      <label className="checkbox-container">
        <input
          type="checkbox"
          onChange={onChecked}
          className="form-check-input"
          value={sauce}
          disabled={
            !selectedSauces.includes(sauce) && selectedSauces.length >= 2
          }
        />
        <span className="custom-checkbox"></span>
        {sauce}
      </label>
    </div>
  );
}

export default CheckboxSauce;
