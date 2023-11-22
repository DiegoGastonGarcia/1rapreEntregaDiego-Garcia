import { useEffect } from "react";
import { getProducts } from "../productsMock";

export const Map = () => {
  useEffect(() => {
    getProducts()
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2>Productos disponibles</h2>
      {products.map((products) => (
        <p>Nombre: {products.name}</p>
      ))}
    </div>
  );
};
