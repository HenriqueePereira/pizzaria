 // importando array de pizzas
 let pizzas = require("../database/Pizzas.json")

 module.exports = {
     listar: (req, res) => {


         res.render("pizzas", {
             pizzas,
             busca: ""
         });
     },

     buscar: (req, res) => {
         let trechoBuscado = req.query.q;
         if (trechoBuscado) {
             let resultado = pizzas.filter(p => p.nome.toUpperCase().includes(trechoBuscado.toUpperCase()));
             return res.render("pizzas", {
                 pizzas: resultado,
                 busca: trechoBuscado
             });
         } else {
             return res.redirect("/");
         }
     },

     mostrar: (req, res) => {
         const {id} = req.params
         let pizza = pizzas.find(
             pizza => pizza.id == id
         );

         // 1: Encontrar a posição da pizza de id 6
         var posicao = pizzas.findIndex(
             pizza => pizza.id == id
         )

         // 2: Descobrir o id da pizza anterior...
         let idAnterior;
         if (posicao == 0) {
             idAnterior = pizzas[pizzas.length - 1].id;
         } else {
             idAnterior = pizzas[posicao - 1].id;
         };

         let idProximo;
         if (posicao > pizzas.length) {
             idProximo = pizzas[0].id;
         } else {
             idProximo = pizzas[posicao + 1].id;
         }


         res.render("pizza", {pizza, idProximo, idAnterior})
     }
 }

 //Na função mostrar no arquivo PizzasController:
 //Declare duas variáveis: idProxima e idAnterior 
 //- Capture o id da pizza a partir da URL na variável id (Esse passo já foi dado... req.params.id)
 //- Determine a posição da pizza que tem o id desejado (Dica: Use a função findIndex) e guarde na variável posicao
 //- Guarde a pizza da posicao encontrada na variável pizza
 //- Se a posição da pizza encontrada for a última do array, idProxima deve receber o id da primeira pizza
 //- Caso contrário, idProxima deve ter o id da pizza da posição seguinte
 //- Se a posição da pizza envontrada for a primeira do array, o idAnterior deve receber o id da última pizza
 //- Caso controário, idAnterior deve receber o id da pizza na posição anterior.
 //☐ No arquivo pizza.ejs, adeque os links: