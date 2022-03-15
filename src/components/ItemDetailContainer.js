import React, { useEffect, useState } from "react";
import movies from "../database/movies.js";
import ItemDetail from "./ItemDetail"

function getMovie() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(movies[0]);
      });
    }, 3000);
  }

const ItemDetailContainer = () => {
  
    const [item, setItem] = useState([]);
  useEffect(() => {
    getMovie()
    .then(respuestaPromise => setItem(respuestaPromise))
  }, []);

  return <ItemDetail item={item} />;
  
}

export default ItemDetailContainer