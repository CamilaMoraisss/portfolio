//criar um bdd sobre academia

//código SQL:
//CREATE DATABASE academia 
//Para criar utilizando o mongodb usamos:
//use("bdacademia");


//Para criar uma tabela "personal" em SQL 
//CREATW TABLE PERSONAL(
    //id INT PRIMARY KEY,
    // nome VARCHAR (45),
    //salario decimal (2)
//);

//Como criar uma tabela no mongodb?
/*db.createCollection("personal");
//para inserir os dados no mongodb voce basta fzer isso:

use("bdacademia");
db.personal.insertOne(
    {_id:1, nome:"Júlio", salario:3000}


);
use("bdacademia");
db.personal.insertOne(
{_id:2 , nome:"Jorge", salario:3500}
   
); 

db.personal.insertOne(
    {_id:3, nome:"Ana", salario:5000}

   
);*/

//consultando dados no mongo 

/*use("bdacademia");
db.personal.find();*/

//filtrando dados no mongo 

use("bdacademia");
db.personal.find({_id:1});
//seria msm coisa se eu colocasse no SQL : SELECT nome, salario
db.personal.find({_id:1},{nome:true, salario: true});