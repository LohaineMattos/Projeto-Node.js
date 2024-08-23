const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyparser = require("body-parser");


const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'biblioteca'
});

const create = (req, res) => {
    let nome = req.body.nome;
    let autor = req.body.autor;
    let descricao = req.body.descricao;
    let data = req.body.data;

    let query = `INSERT INTO Clientes (cpf,nome, sobrenome, nascimento) VALUE`;
    query += `('${nome}', '${autor}', '${descricao}', '${data}')`;

    con.query(query, (err, result) => {
        if (err) {

            console.log("Erro ao cadastrar o livro");
        } else {
            console.log("Livro cadastrado com sucesso");
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