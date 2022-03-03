import React from "react";
import { useState } from "react";

const ItemCount = ({ initial, stock }) => {
  let [estado, setEstado] = useState(initial);
  const sumar = () => {
    if (estado < stock) {
      setEstado(estado + 1);
    } else alert("No poseemos mas stock");
  };
  let restar = () => {
    if (estado > 0) {
      setEstado(estado - 1);
    }
  };

  let onAdd = () => {
    if (estado > 0) {
      alert("Se ha agregado " + estado + " productos a su carrito");
    } else alert("Seleccione algun producto para agregar a su carrito");
  };
  return (
    <div className="countContainer">
      <div className="buttonsContainer">
        <button onClick={restar} className="countButtons">
          -
        </button>

        <p className="countText">{estado}</p>
        <button onClick={sumar} className="countButtons">
          +
        </button>
      </div>
      <div className="countAdd">
        <button onClick={onAdd} className="countButtons">
          Agregar
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
