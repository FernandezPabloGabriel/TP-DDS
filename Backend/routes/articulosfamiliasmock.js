const express = require('express');
const router = express.Router();

let arr_ArticulosFamiliasMock = [
  {
    "IdArticuloFamilia": 1,
    "Nombre": "Accesorios"
  },
  {
    "IdArticuloFamilia": 2,
    "Nombre": "Audio"
  },
  {
    "IdArticuloFamilia": 3,
    "Nombre": "Celulares"
  },
  {
    "IdArticuloFamilia": 4,
    "Nombre": "Cuidado Personal"
  },
  {
    "IdArticuloFamilia": 5,
    "Nombre": "Dvd"
  },
  {
    "IdArticuloFamilia": 6,
    "Nombre": "Fotografia"
  },
  {
    "IdArticuloFamilia": 7,
    "Nombre": "Frio-Calor"
  },
  {
    "IdArticuloFamilia": 8,
    "Nombre": "Gps"
  },
  {
    "IdArticuloFamilia": 9,
    "Nombre": "Informatica"
  },
  {
    "IdArticuloFamilia": 10,
    "Nombre": "Led - Lcd"
  }
];

router.get('/api/articulosfamiliasmock', async function (req, res) {
  const Nombre = req.query.nombre;
  const articulosFamilia = arr_ArticulosFamiliasMock.filter(
    (art) => art.Nombre == Nombre
  )
  if (articulosFamilia) {
    res.json(articulosFamilia)
  }
  else {
    res.json(arr_ArticulosFamiliasMock);
  } //Devolvemos en formato json el array de articulos
});

router.get('/api/articulosfamiliasmock/', async function (req, res) {
  let articulosFamilia = arr_ArticulosFamiliasMock.find(
    (art) => art.IdArticuloFamilia == req.params.id // Extraemos de la solicitud el id y nos fijamos si hay algún artículo con tal id
  );

  if (articulosFamilia) {
    res.json(articulosFamilia);
  }
  else {
    res.status(404).json({ message: 'articulofamilia no encontrado' })
  }
})

router.get('/api/articulosfamiliasmock/:id', async function (req, res) {
  let articulosFamilia = arr_ArticulosFamiliasMock.find(
    (art) => art.IdArticuloFamilia == req.params.id // Extraemos de la solicitud el id y nos fijamos si hay algún artículo con tal id
  );

  if (articulosFamilia) {
    res.json(articulosFamilia);
  }
  else {
    res.status(404).json({ message: 'articulofamilia no encontrado' })
  }
})

router.post('/api/articulosfamiliasmock/', (req, res) => {
  const { Nombre } = req.body;
  let articuloFamilia = {
    Nombre,
    IdArticuloFamilia: Math.floor(Math.random() * 100000)
  };
  arr_ArticulosFamiliasMock.push(articuloFamilia);
  res.status(201).json(articuloFamilia);
})

router.put('/api/articulosfamiliasmock/:id', (req, res) => {
  const articuloFamilia = arr_ArticulosFamiliasMock.find(
    (art) => art.IdArticuloFamilia == req.params.id
  );

  if (articuloFamilia) {
    const { Nombre } = req.body;
    articuloFamilia.Nombre = Nombre;
    res.json({ message: 'Articulofamilia actualizado' })
  } else {
    res.status(404).json({ message: 'Articulo no encontrado' })
  }
})

router.delete('/api/articulosfamiliasmock/:id', (req, res) => {
  const articuloFamilia = arr_ArticulosFamiliasMock.find(
    (art) => art.IdArticuloFamilia == req.params.id
  );

  if (articuloFamilia) {
    arr_ArticulosFamiliasMock = arr_ArticulosFamiliasMock.filter(
      (art) => art.IdArticuloFamilia != req.params.id
    )
    res.json({ message: 'Articulofamilia eliminado' })
  } else {
    res.status(404).json({ message: 'Articulo no encontrado' })
  }
})

module.exports = router;
