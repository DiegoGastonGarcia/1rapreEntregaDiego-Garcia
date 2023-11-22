import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Map } from "./components/Map/Map";

export function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje=" Soy una lista de items " />
      <Map />
    </>
  );
}

export default App;
