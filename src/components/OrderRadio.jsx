import React, { useState } from "react";

function OrderRadio({ sizeList, handleSizeChange }) {
  const [activeSize, setActiveSize] = useState(null);

  const onClickFunc = (e) => {
    const size = e.target.value;
    setActiveSize(size);
    handleSizeChange(size);
  };
  return (
    <div className="d-flex">
      {sizeList.map((size, index) => (
        <label key={index} className="p-2 d-block">
          <input
            type="button"
            className={`options-button ${activeSize === size ? "active" : ""}`}
            name="boyut"
            value={size}
            onClick={onClickFunc}
          />
        </label>
      ))}
    </div>
  );
}

export default OrderRadio;
