import React, { useEffect, useState } from "react";
import movies from "../database/movies.js";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function getMovie(movieId) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let movie = movies.find(item => item.id === Number(movieId))
      resolve(movie);
    });
  }, 3000);
}

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const {movieId} = useParams()
  useEffect(() => {
    
    getMovie(movieId)
    .then(respuestaPromise => setItem(respuestaPromise));
  }, [movieId]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
