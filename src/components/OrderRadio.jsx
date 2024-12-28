import React from "react";

function OrderRadio({ sizeList, handleSizeChange }) {
  return (
    <div>
      {sizeList.map((size, index) => (
        <label className="p-2 d-block">
          <input
            type="radio"
            name="boyut"
            key={index}
            value={size}
            onChange={() => handleSizeChange(size)}
          />
          <span className="mx-3">{size}</span>
        </label>
      ))}
    </div>
  );
}

export default OrderRadio;
