import "./item.css";

export const Item = ({ name, type, stock }) => {
  return (
    <div class='container-fluid d-flex flex-column '>
      <div class='card'>
        {/* <div class="image">
        <img src="" />
      </div> */}
        <div class='card-inner'>
          <div class='header'>
            <h2>{name}</h2>
            <h5> {type} </h5>
          </div>
          <div class='content'>
            <p>Cantidad disponible {stock} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
