//Manipulação de informações em formato binário

const Buffer = require("buffer").Buffer;

const buf = Buffer.from("Curso completo de NodeJS");

console.log(buf); // Leitura em formato binário
console.log(buf.toString()); // Leitura legível
console.log(buf.toString("utf16le")); // Formato de Transformação Unicode

// Setar;
// Definir um valor ao criar uma String
const buf_string = Buffer.from("Carregando uma string", "utf-8");
console.log(buf_string.toString());

//É um buffer ou não? (Comentar anteriores antes de executar)
const buf_string = Buffer.from("Carregando uma string", "utf-8");
console.log(Buffer.isBuffer(buf_string));
console.log(buf_string.toString("utf-8", 0, 10)); // Trazendo apenas uma parte do buffer, informando o encode e bits que eu quero dentro dessa String.
