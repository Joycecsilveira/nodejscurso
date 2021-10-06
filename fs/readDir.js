// Arquivo para ler diretório atual

const fs = require("fs");

fs.readdir("../", (err, data) => {
  // "../" trazer do diretório anterior subindo de nível ao invés de usar o dirname direto do diretório.
  if (err) throw err;

  data.forEach((files) => {
    /* forEach() é uma função de array do Node.js que é usada para iterar itens em um determinado array.*/
    console.log(__dirname + "\\" + files);
  });
});
