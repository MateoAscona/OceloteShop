import React from "react";
import Item from "./Item";
import { useThemeContext } from "../context/ThemeContext";

const ItemList = ({ items }) => {
 const {isOn} = useThemeContext();
  return (
    <section className={`itemContainer${isOn}`}>
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </section>
  );
};

export default ItemList;
