import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import {  useState } from "react";
import { useCartContext } from "./CartContext";



const ItemDetail = ({ item }) => {
  const { addToCart, cartQty } = useCartContext();
  const [countInCart, setCountInCart] = useState(0);
  

  const onAdd = (count) => {
    setCountInCart(count);
    addToCart(item, count);
  };
  return (
    <article className="itemDetailStyle">
      <h1 className="itemDetailElement">{item.title}</h1>
      <img
        className="itemDetailElement"
        src={item.image}
        alt={item.title}
      ></img>
      <h3 className="itemDetailElement">{item.category}</h3>
      <h4 className="itemDetailElement">{item.company}</h4>
      <p className="itemDetailElement">{item.descriptionLong}</p>
      {countInCart === 0 ? (
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
      ) : (
        <Link to={"/cart"}>
          <button className="countButtons">Go to Cart</button>
        </Link>
      )}
    </article>
  );
};

export default ItemDetail;
