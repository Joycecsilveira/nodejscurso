const http = require("http"); // Modulo nativo
const localhost = "127.0.0.1";
const port = 3000;

// Abaixo utilizo Require e host para a criação de uma constante para criar um servidor web que utilize o módulo hhtp para criar um servidor. O servidor recebe solicitações(request, req) e devolve uma resposta(response, res).

const server = http.createServer((_req, res) => {
  res.statusCode = 200; // Toda vez que tenho um statusCode 200 estou informado que está tudo funcionando bem.
  res.setHeader('Content-Type', 'text/plain'); // O objeto Set permite que você armazene valores únicos de qualquer tipo, desde valores primitivos a referências a objetos.
  res.end("Ola Mundo \n Meu Primeiro Script"); // Parar o processamento e exibir na tela; \n pula linha no terminal, no browser utilizo <br, quando não utilizar o text-plain.
});

// Abaixo inicio o meu servidor, utilizarei port e host.

server.listen(port, localhost, () => {
  console.log(`Server running at http://${host}
    :${port}`);
});
