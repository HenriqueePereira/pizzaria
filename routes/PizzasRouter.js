// importando express
const express = require("express");

const PizzasController = require("../controllers/PizzasController");

//criando roteador
const router = express.Router();

//criando rota get
router.get("/", PizzasController.listar);
router.get("/pizzas/:id", PizzasController.mostrar);
router.get("/pizzas/busca", PizzasController.buscar);


// exportando roteador
module.exports = router