//API nativa utilizada para manipular caminhos dos arquivos.

const path = require("path");

console.log("basename", path.basename("c:\\temp\\arquivo.html")); //Base name trás informações somente do nome do arquivo

//Normalizando URL
console.log("normalize", path.normalize("c:\\temp/dir//subdir/dir/.."));

//Junção e montagem de caminhos (URL)
console.log(
  "join path:",
  path.join("/teste", "teste2", "teste3/", "teste4", "dir2", ".")
);

//Resolve - Traz o caminho absoluto de um arquivo a partir de onde estou executando, no S.O, no momento em que mando um determinado arquivo.
console.log("resolve:", path.resolve("path.js"));

//Capturar a extensão do nome de um arquivo
console.log("extension:", path.extname("path.js"));
