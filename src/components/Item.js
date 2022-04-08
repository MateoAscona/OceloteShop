import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <article className="itemStyle">
      <h1>{item.title}</h1>
      <img src={item.image} alt={item.title} className="itemImg"></img>
      <h3>{item.category}</h3>
      <h4>{item.company}</h4>
      <p>{item.description}</p>
      <p className="itemPrice">${item.price}</p>
      <Link to={`/item/${item.id}`} className="defaultButton">
        Buy
      </Link>
    </article>
  );
};

export default Item;
