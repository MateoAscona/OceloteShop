import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import movies from "../database/movies.js";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

function getData(idCategory) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (!idCategory) {
        resolve(movies);
      } else {
        let moviesCategory = movies.filter(
          (item) => item.category == idCategory
        );
        resolve(moviesCategory);
        console.log(moviesCategory);
      }
    }, 1500);
  });
}

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    toast.info("Obteniendo datos");

    getData(idCategory)
      .then((respuestaPromise) => {
        toast.dismiss();
        setItems(respuestaPromise);
      })
      .catch(() => {
        toast.error("Error al obtener datos");
      });
  }, [idCategory]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
