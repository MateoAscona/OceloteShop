import React from "react";
import Item from "./Item";
import { useCartContext } from "./CartContext";

const ItemList = ({ items }) => {
  const { isOn } = useCartContext();
  return (
    <section className={`itemContainer${isOn}`}>
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </section>
  );
};

export default ItemList;
