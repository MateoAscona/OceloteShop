import { firestoreDB } from "./firebase";
import { collection, getDocs, query, where, doc, getDoc  } from "firebase/firestore/lite";

export async function getAllProducts (){
    const myColec = collection(firestoreDB, "Products");
    const getProducts = await getDocs(myColec);
    
    return getProducts.docs.map(prod => prod.data());
}

export async function getProductsByCategory (category){
    const myColec = collection(firestoreDB, "Products");
    const categoryQuery = query(myColec, where ("category", "==", category));
    const getProducts = await getDocs(categoryQuery);

    
    return getProducts.docs.map(prod => prod.data());
}

