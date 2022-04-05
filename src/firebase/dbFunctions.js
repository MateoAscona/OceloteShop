import { firestoreDB } from "./firebase";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  Timestamp,
  addDoc,
} from "firebase/firestore/lite";

export async function getAllProducts() {
  const myColec = collection(firestoreDB, "Products");
  const getProducts = await getDocs(myColec);

  return getProducts.docs.map((prod) => prod.data());
}

export async function getProductsByCategory(category) {
  const myColec = collection(firestoreDB, "Products");
  const categoryQuery = query(myColec, where("category", "==", category));
  const getProducts = await getDocs(categoryQuery);

  return getProducts.docs.map((prod) => prod.data());
}

export async function getOneProduct(id) {
  const nId = Number(id);
  const myColec = collection(firestoreDB, "Products");
  const idQuery = query(myColec, where("id", "==", nId));
  const getProduct = await getDocs(idQuery);

  return getProduct.docs[0].data();
}

export async function pushOrder(order) {
  const time = Timestamp.now();
  const orderWithTime = { ...order, date: time };
  const myColec = collection(firestoreDB, "Orders");
  const newOrder = await addDoc(myColec, orderWithTime);
  return newOrder.id;
}
