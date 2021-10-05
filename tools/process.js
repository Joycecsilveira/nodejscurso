console.log(`Nome do Arquivo: `, __filename); //Captura  recursos internos;
console.log(`Diretório do arquivo: `, __dirname);
console.log(`Diretório em que foi invocado: `, process.cwd());
console.log(`Sistema operacional: `, process.env.OS);
console.log(`Usuário no SO: `, process.env.USERNAME);
console.log(`Idioma:`, process.env.LANG);
console.log(`Nome do Server: `, process.env.COMPUTERNAME);

switch (process.argv[2]) {
  case "-a":
    console.log("Execute rotina principal");
    break;
  case "-i":
    console.log("Execute Instalação");
    break;
  case "-q":
    console.log("Encerrando aplicação");
    process.exit(); //interrompe imediatamente o código.

  default:
    console.log("Parametro invalido");
}
console.log(`Ambiente do Servidor: `, process.plataform);
