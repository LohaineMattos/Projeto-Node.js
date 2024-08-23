const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyparser = require("body-parser");


const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'cantina'
});

const create = (req, res) => {
    let nome = req.body.nome;
    let fornecedor = req.body.fornecedor;
    let descricao = req.body.descricao;
    let preco = req.body.preco;
    let custo = req.body.custo;

    let query = `INSERT INTO Clientes (cpf,nome, sobrenome, nascimento) VALUE`;
    query += `('${nome}', '${fornecedor}', '${descricao}', '${preco}', '${custo}')`;

    con.query(query, (err, result) => {
        if (err) {

            console.log("Erro ao cadastrar um produto");
        } else {
            console.log("Produto cadastrado com sucesso");
        }
    })
}
const teste = (req, res) => {
    console.log("Funcionando");
}

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", teste);
app.post("/clientes", create);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})