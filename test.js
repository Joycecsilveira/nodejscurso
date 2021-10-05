const crypto = require("crypto");
const start = Date.now();

function logHashTime() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log(`Hash: ${Date.now() - start}`); // Esse hash foi processado no momento "x"
  });
}
//  Todas as bibliotecas do Node.js assíncronas possuem um callback no último parametro.
logHashTime(); //   Utilizando o Threadpool para otimizar o processo.
logHashTime();
logHashTime();
logHashTime();
