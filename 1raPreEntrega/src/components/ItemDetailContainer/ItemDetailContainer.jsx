import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductId } from "../productsMock";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProductId(id)
      .then((resp) => setItem(resp))
      .catch((error) => console.log(error));
  }, []);
  return <>{item && <ItemDetail {...item} />}</>;
};
