const { EventEmitter } = require("events");
const emitter = new EventEmitter();

const validaObjeto = (a) => {
  if (typeof a !== "object") {
    emitter.emit("error", new Error("O tipo de objeto informado é inválido"));
  }
  console.log("Objeto Válido!");
};

//Ouvindo o evento

emitter.addListener("error", (err) => {
  console.log("Evento: " + err.message);
});

let dados = { name: "Hcode", course: "NodeJS" };

validaObjeto(dados);
