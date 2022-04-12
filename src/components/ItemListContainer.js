import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getAllProducts, getProductsByCategory } from "../firebase/dbFunctions";
import { toast } from "react-toastify";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    toast.info("Loading products...", { autoClose: 1500 });
    if (!idCategory) {
      getAllProducts()
        .then((products) => setItems(products))
        .catch(() => toast.error("Error loading products"))
        .finally(() => toast.dismiss());
    } else {
      getProductsByCategory(idCategory)
        .then((products) => setItems(products))
        .catch(() => toast.error("Error loading products"))
        .finally(() => toast.dismiss());
    }
  }, [idCategory]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
