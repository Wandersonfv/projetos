import consign from "consign";
import express from "express";
const porta = 3000
const app = express()

app.set("json spaces",4)

consign().include("models").then("routes").into(app)


app.listen(porta,() => console.log(`Ntask API porta ${porta}`))
