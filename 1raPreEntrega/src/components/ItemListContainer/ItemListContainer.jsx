import { useState, useEffect } from "react";
import { getProducts } from "../productsMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { type } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((response) => {
        if (type) {
          const pFilter = response.filter((product) => product.type === type);
          setProducts(pFilter);
        } else {
          setProducts(response);
        }
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {isLoading ? (
        <h2> Buscando productos en la tienda... </h2>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};
