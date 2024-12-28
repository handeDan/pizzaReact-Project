import React from "react";

function Checkbox({ material, checked, onChange }) {
  return (
    <div className="col-md-4 col-sm-6">
      <label className="form-check mb-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="form-check-input"
        />
        {material} <span className="text-danger"> - 5₺</span>
      </label>
    </div>
  );
}

export default Checkbox;
