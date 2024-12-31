import React from "react";

function Checkbox({ material, onChecked, selectedMaterials }) {
  return (
    <div className="col-4 mb-3">
      <label className="checkbox-container">
        <input
          type="checkbox"
          onChange={onChecked}
          className="form-check-input"
          value={material}
          disabled={
            !selectedMaterials.includes(material) &&
            selectedMaterials.length >= 10
          }
        />{" "}
        <span className="custom-checkbox"></span>
        {material} <span className="text-danger "> - 5₺</span>
      </label>
    </div>
  );
}

export default Checkbox;
