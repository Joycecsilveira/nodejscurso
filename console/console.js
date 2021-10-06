console.log("Exibindo uma mensagem no console");

//erro
console.error(new Error("Exibindo mensagem de erro, temos problemas"));

//exibir dados em forma de tabela
const carros = ["GM", "FIAT", "FORD", "Renault", "Honda"];
console.table(carros); //criar tabela exibindo Array

// Exibindo objetos em forma de linhas e colunas.
const dados = { nome: "Joyce", profissão: "Desenvolvedora" };
console.table(dados);

// Contar em quantas vezes passou em determinado trecho de código
console.count("processo");
console.count("processo");
console.count("processo");

console.log("Resetando o processo");
console.countReset("processo");
console.count("processo");

console.time("contador");
console.timeEnd("contador");

//Verificar se uma condição esta dando certo ou gerando erro
console.assert(true, "Faça alguma coisa");
console.assert(false, "Eita %s, que pena!", "Não funcionou");

console.clear();
