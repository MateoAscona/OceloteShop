import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import movies from "../database/movies.js";

function getData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(movies);
    });
  }, 3000);
}

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getData()
    .then(respuestaPromise => setItems(respuestaPromise))
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
