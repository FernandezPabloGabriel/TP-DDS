const express = require("express");
const router = express.Router();

const db = require("../base-orm/sequelize-init");

router.get("/api/articulosfamilias", async function (req, res, next) {
  let data = await db.articulosfamilias.findAll({
    attributes: ["IdArticuloFamilia", "Nombre"]
  });
  res.json(data);
});

router.get("/api/articulosfamilias/:id", async function (req, res, next) {
  //let articulo = await db.articulosfamilias.findByPk(req.params.id)
  let articulo = await db.articulosfamilias.findOne({
    where: { IdArticuloFamilia: req.params.id }
  })
  if (articulo) {
    res.status(201).json(articulo)
  }
  else {
    res.status(404).send({ message: "Artículo de familia no encontrado" })
  }
})

module.exports = router;
