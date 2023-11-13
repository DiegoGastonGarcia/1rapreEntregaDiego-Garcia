import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

export function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje=" Soy una lista de items " />
    </>
  );
}

export default App;
