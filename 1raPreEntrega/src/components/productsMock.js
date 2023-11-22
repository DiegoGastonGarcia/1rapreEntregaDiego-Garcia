const products = [
  { id: "1", name: "Play Station 5", type: "Consola", stock: "6" },
  { id: "2", name: "Play Station 4", type: "Consola", stock: "3" },
  { id: "3", name: "Xbox One", type: "Consola", stock: "1" },
  { id: "4", name: "Xbox Series S", type: "Consola", stock: "3" },
  { id: "5", name: "Joystick", type: "Accesorio", stock: "6" },
  { id: "6", name: "Auricular", type: "Accesorio", stock: "6" },
  { id: "7", name: "Risk Of Rain 2", type: "Juego", stock: "45" },
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
