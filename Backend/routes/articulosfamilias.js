const express = require("express");
const router = express.Router();

const db = require("../base-orm/sequelize-init"); // Asignamos una constante al modelo de datos

// Obtener todos los artículos familias
router.get("/api/articulosfamilias", async function (req, res, next) {
  let data = await db.articulosfamilias.findAll({
    attributes: ["IdArticuloFamilia", "Nombre"]
  });
  res.json(data);
});


// Obtener un artículo familia en específico
router.get("/api/articulosfamilias/:id", async function (req, res, next) {
  //let articulo = await db.articulosfamilias.findByPk(req.params.id)
  let articulo = await db.articulosfamilias.findOne({
    where: { IdArticuloFamilia: req.params.id },
    attributes: ["IdArticuloFamilia", "Nombre"]
  })
  if (articulo) {
    res.status(201).json(articulo)
  }
  else {
    res.status(404).send({ message: "Artículo de familia no encontrado" })
  }
})

module.exports = router;
