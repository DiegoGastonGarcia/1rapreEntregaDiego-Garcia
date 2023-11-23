const products = [
  { id: "1", name: "Play Station 5", type: "Consola", stock: "6" },
  { id: "2", name: "Xbox Series S", type: "Consola", stock: "3" },
  { id: "3", name: "Joystick", type: "Accesorio", stock: "6" },
  { id: "4", name: "Auricular", type: "Accesorio", stock: "6" },
  { id: "5", name: "Risk Of Rain 2", type: "Juego", stock: "45" },
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
