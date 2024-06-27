//Nuestro entry point

const express = require("express"); // Importamos la librería express

// crear servidor
const app = express(); // Se configura la app express

// controlar ruta
app.get("/", (req, res) => { // Solicitud get que nos devuelve un mensaje
  res.send("Backend inicial dds-backend!");
});

//levantar servidor local 
const port = 3000;
app.listen(port, () => {
  console.log(`sitio escuchando en el puerto http://localhost:${port}`);
});
