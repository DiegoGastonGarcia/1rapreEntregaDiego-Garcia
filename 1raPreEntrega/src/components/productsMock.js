const products = [
  {
    id: "1",
    name: "Play Station 5",
    type: "Consola",
    stock: "6",
    price: "$1.200.000",
  },
  {
    id: "2",
    name: "Xbox Series S",
    type: "Consola",
    stock: "3",
    price: "$800.000",
  },
  {
    id: "3",
    name: "Joystick",
    type: "Accesorio",
    stock: "6",
    price: "$45.000",
  },
  {
    id: "4",
    name: "Auricular",
    type: "Accesorio",
    stock: "6",
    price: "$85.000",
  },
  {
    id: "5",
    name: "Risk Of Rain 2",
    type: "Juego",
    stock: "45",
    price: "$35.000",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProductId = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const product = products.find((product) => product.id === id);

      setTimeout(() => {
        if (!product) {
          reject(`No se encuentra el producto con el id ${id}`);
        }
        resolve(product);
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};
