// fs.unlink é um comando da API de  filesystem que permite que vc exclua um arquivo.
// Exemplo de leitura de arquivo e exclusão.

const fs = require("fs");
fs.readFile("arquivo.txt", (err, data) => {
  // Leitura do arquivo; método não bloqueante com método call back que recebe os parametros erro e dados.
  if (err) throw err; // Em caso de erros;
  console.log(data);

  fs.unlink("arquivo.txt", (unlinkErr) => {
    if (unlinkErr) throw unlinkErr;
    console.log("Arquivo Exclúido com sucesso!");
  });
});
// Somente depois de fazer a leitura total do arquivo o mesmo poderá ser excluído.
