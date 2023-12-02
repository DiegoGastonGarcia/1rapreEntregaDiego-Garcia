import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
  return (
    <div class='container-fluid d-flex flex wrap'>
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};
