import { useState, useEffect } from "react";
import { getProducts } from "../productsMock";
import { Item } from "../Item/Item";

export const Map = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div class='container-fluid d-flex'>
      {products.map((product) => (
        <Item
          key={product.id}
          name={product.name}
          type={product.type}
          stock={product.stock}
        />
      ))}
    </div>
  );
};
