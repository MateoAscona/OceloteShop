import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import movies from "../database/movies.js";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import {getAllProducts, getProductsByCategory} from "../firebase/dbFunctions";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    if(!idCategory){
      getAllProducts().then(products => setItems(products))}
    else{
      getProductsByCategory(idCategory).then(products => setItems(products))}
  }, [idCategory]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
