import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../firebase/dbFunctions.js";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    getOneProduct(itemId).then((respuestaPromise) => setItem(respuestaPromise));
  }, [itemId]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
