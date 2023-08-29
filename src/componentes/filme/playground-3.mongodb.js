//Criar um banco de dados sobre academia

//Código SQL:
//CREATE DATABASE bdacademia

//Para criar utilizando o mongodb usamos
use("bdacademia");
db.dropDatabase();
use("bdacademia");

//Para criar uma tabela "personal" em sql
//CREATE TABLE personal(
    // id INT PRIMARY KEY,
    // nome VARCHAR(45),
    // salario decimal(2)
//);

//Como criar uma tabela no mongodb?
db.createCollection("personal");
//Inserir dados no mongodb
db.personal.insertMany([
    {_id:1,nome:"Júlio",salario:3000},
    {_id:2,nome:"Jorge",salario:1000},
    {_id:3,nome:"Pedro",salario:2000}
]);


//Consultando no mongodb
use("bdacademia");
db.personal.find();


use("mypet");
db.createCollection("dono");

db.dono.insertMany([
    {_id:10, 
    nome:"camis",
    idade:16,
    animal:
        [
            {id:1,nome:"miau", valor: 900, raca: "gato siamês"},
            {id:2,nome:"lessy", valor: 350, raca: "cachorro labrador"},
            {id:3,nome:"kira", valor: 1500, raca: "pássaro calopsita"},
        ]
    }

    {_id:20, 
        nome:"ellen",
        idade:18,
        animal:
            [
                {id:4,nome:"risus", valor: 30, raca: "cachorro vira-lata"},
                {id:5,nome:"polly", valor: 499, raca: "cachorro golden retriver"},
                {id:6,nome:"max", valor: 200, raca: "pássaro piriquito"},
            ]
        }

        {_id:30, 
            nome:"henrique",
            idade:19,
            animal:
                [
                    {id:7,nome:"polus", valor: 300, raca: "cachorro vira-lata"},
                    {id:8,nome:"coca", valor: 400, raca: "gato vira-lata "},
                    {id:9,nome:"cassia", valor: 500, raca: "vira-lata pássaro"},
                ]
            }
 
            {_id:40, 
                nome:"gabi",
                idade:17,
                animal:
                    [
                        {id:11,nome:"maximus", valor: 30, raca: "gato francês"},
                        {id:12,nome:"mel", valor: 499, raca: "cachorro beagle"},
                        {id:13,nome:"leona", valor: 200, raca: "cachorro boxer"},
                    ]
                }
 ])

//consultas