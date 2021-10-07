//Controlando Eventos com Event Emitter

const { EventEmitter } = require("events");

class Evento extends EventEmitter {}
const meuEvento = new Evento(); //Instância do objeto, copia esse objeto e inicia.

//subscriber - assinante
meuEvento.on("seguranca", (x, y) => {
  console.log(`Executando o evento 'seguranca': ${x} ${y}`);
});

//publisher - emissor
meuEvento.emit("seguranca", "userAdmin", "Alterou o cargo");

meuEvento.on("Encerrar", (dados) => {
  console.log("Assinante: " + dados);
});

meuEvento.emit("Encerrar", "Encerrando a execução da importação dos dados!");
