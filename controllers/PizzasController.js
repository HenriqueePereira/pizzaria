 // importando array de pizzas
 let pizzas = require("../database/Pizzas.json")

module.exports = {
    listar: (req, res) => {


        res.render("pizzas", {pizzas, busca: ""});
    },

    buscar: (req, res) => {
        let busca = req.query.q;
        if (busca) {
            let result = pizzas.filter(p => p.nome.toUpperCase().includes(busca.toUpperCase()));
            return res.render("pizzas", {pizzas: result, busca});
        } else {
            return res.redirect("/");
        }
    },

    mostrar: (req, res) => {
        const {id} = req.params
        let pizza = pizzas.find(
            pizza => pizza.id == id
        );
        res.render("pizza.ejs",{pizza})
    }
}
