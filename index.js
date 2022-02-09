const express = require("express");
const bodyParser = require("body-parser");

const userRoute = require("./routes/userRote");

const app = express();
const port = 3000;

app.user(bodyParser.urlencoded({ extended: false }));

const port = 3000;

userRoute(app);

app.get("/", (req, res) => res.send("Olá mundo pelo Express!"));

app.listen(port, () => console.log("Api rodando na porta 3000"));
