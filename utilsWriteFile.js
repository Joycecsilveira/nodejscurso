const { promosify, promisify } = require("util");

const writeFile = promisify(require("fs").writeFile); //Promisify carregando o modo FileSystem para utilizar Promises e buscar o módulo do FileSystem desejado.
const conteudo = `Criando um arquivo utilizando Promisify do módulo nativo util`;

writeFile("utilArquivo.txt", conteudo)
  .then(() => {
    console.log("Arquivo utilArquivo criado com sucesso");
  })
  .catch((err) => {
    console.log(`Deu Erro: ${err}`);
  });
