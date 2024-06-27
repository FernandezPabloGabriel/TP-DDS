//Nuestro entry point
const articulosfamiliasRouter = require("./routes/articulosfamilias");
const articulosRouter = require("./routes/articulos")
const express = require("express"); // Importamos la librería express
require("./base-orm/sqlite-init"); //Importamos la ejecución del la función que crea la BD
const cors = require("cors");

// crear servidor
const app = express(); // Se configura la app express
app.use(express.json()); // Middleware que le permite a express interpretar JSONS en el body de una solicitud
app.use(articulosfamiliasRouter);
app.use(articulosRouter)
app.use(cors({ origin: "*" })) // Origen: Desde cualquier dominio

// controlar ruta
app.get("/", (req, res) => { // Solicitud get que nos devuelve un mensaje
  res.send("Backend inicial dds-backend!");
});

app.use('', (req, res) => {
  res.status(404).send("Página no encontrada");
})

//levantar servidor local 
const port = 3000;
app.listen(port, () => {
  console.log(`sitio escuchando en el puerto http://localhost:${port}`);
});
