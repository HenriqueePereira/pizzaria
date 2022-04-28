// importando express
const express = require("express");
const path = require("path");

// importando roteadores
const PizzasRouter = require("./routes/PizzasRouter");

// criando aplicaçao web com express
const app = express();

// configurando ejs
app.set("view engine", "ejs");

//configurando a pasta public para arquivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// criando rota get
//app.get("/", (req, res) => {
  //  res.send("Olá, Visitante!")
//});

//usando roteadores
app.use("/", PizzasRouter);

//levantando servidor
app.listen(3000, () => {console.log("Aplicaçao escutando na porta 3000")});

