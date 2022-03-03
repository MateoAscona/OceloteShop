import React from "react";
import Header from "./components/Header";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <Header />
      <ItemListContainer gretting="Bienvenido!" />
      <ItemCount stock={10} initial={1}/>
    </>
  );
};

export default App;
