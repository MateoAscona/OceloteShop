import React from "react";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  let [count, setCount] = useState(initial);

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    } else alert("No poseemos mas stock");
  };
  let less = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="countContainer">
      <div className="buttonsContainer">
        <button onClick={less} className="countButtons">
          -
        </button>

        <p className="countText">{count}</p>
        <button onClick={add} className="countButtons">
          +
        </button>
      </div>
      <div className="countAdd">
        <button onClick={() => onAdd(count)} className="countButtons">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
