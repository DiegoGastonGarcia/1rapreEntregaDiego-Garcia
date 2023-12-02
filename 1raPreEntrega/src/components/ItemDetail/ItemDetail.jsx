import { Count } from "../Count/Count";

export const ItemDetail = ({ type, name, price, stock }) => {
  const onAdd = (items) => {
    alert(`Se agregaron ${items} al carrito`);
  };

  return (
    <div>
      <div className='card '>
        <div className='card-inner '>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'> {type} </p>
          <p>Precio: {price} </p>
          <p>Unidades disponibles: {stock} </p>
          <Count stock={stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};
