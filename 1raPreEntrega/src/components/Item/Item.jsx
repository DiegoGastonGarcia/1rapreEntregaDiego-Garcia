import { Link } from "react-router-dom";
import "./item.css";

export const Item = ({ id, name, type, stock }) => {
  return (
    <div class='container-fluid d-flex '>
      <div class='card '>
        <div class='card-inner'>
          <div class='header'>
            <h2>{name}</h2>
            <h5> {type} </h5>
          </div>
          <Link to={`/item/${id}`}>
            <button className='btn btn-outline-primary'>Info</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
