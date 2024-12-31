import React from "react";

function OrderSelection({ doughList, onChange }) {
  return (
    <div>
      <select
        defaultValue=""
        name="hamur"
        id="hamur"
        onChange={onChange}
        className="form-select"
      >
        <option value="" disabled>
          -Hamur Kalınlığı Seç-
        </option>
        {doughList.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default OrderSelection;
