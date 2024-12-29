import React from "react";

function Checkbox({ material, onChecked, selectedMaterials }) {
  return (
    <div className="col-md-4 col-sm-6">
      <label className="form-check mb-3">
        <input
          type="checkbox"
          onChange={onChecked}
          className="form-check-input"
          value={material}
          disabled={
            !selectedMaterials.includes(material) &&
            selectedMaterials.length >= 10
          }
        />
        {material} <span className="text-danger"> - 5₺</span>
      </label>
    </div>
  );
}

export default Checkbox;
