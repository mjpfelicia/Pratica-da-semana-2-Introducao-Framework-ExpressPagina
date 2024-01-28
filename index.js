const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('arquivos'));

app.get("/mochilas", function (reg, res) {
  res.sendFile(__dirname + "/arquivos/mochila.html");
});

app.get("/bolsas", function (reg, res) {
  res.sendFile(__dirname + "/arquivos/bolsas.html");
});
app.get("/bolsa-de-mao", function (reg, res) {
  res.sendFile(__dirname + "/arquivos/bolsademao.html");
});

app.get("/", function (reg, res) {
  res.sendFile(__dirname + "/arquivos/home.html");
});

app.listen(port, () => {
  console.log("Servidor rodando");
});

