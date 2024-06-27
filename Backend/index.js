//Nuestro entry point
const articulosfamiliasRouter = require("./routes/articulosfamilias");

const express = require("express"); // Importamos la librería express

// crear servidor
const app = express(); // Se configura la app express
require("./base-orm/sqlite-init"); //Importamos la ejecución del la función que crea la BD
app.use(express.json()); // Middleware que le permite a express interpretar JSONS en el body de una solicitud

// controlar ruta
app.get("/", (req, res) => { // Solicitud get que nos devuelve un mensaje
  res.send("Backend inicial dds-backend!");
});

app.use(articulosfamiliasRouter);


app.use('', (req, res) => {
  res.status(404).send("Página no encontrada");
})

//levantar servidor local 
const port = 3000;
app.listen(port, () => {
  console.log(`sitio escuchando en el puerto http://localhost:${port}`);
});
