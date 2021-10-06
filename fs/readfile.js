// Para leitura de arquivos.

// Leitura de arquivo de forma assíncrona, não bloqueante (com callback)
const fs = require("fs");

fs.readFile("texto.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
  // Os dados lidos serão armazenados dentro de um Buffer antes de decidir o que será feito com essas informações. Para essas informações irem para a tela e serem lidos de forma legível utiliza-se toString()
});

//Leitura de arquivo de forma síncrona, bloqueante

const texto = fs.readFileSync("texto.txt");

console.log(`Texto: ${texto}`);
