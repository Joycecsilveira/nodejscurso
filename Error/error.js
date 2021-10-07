// throw new Error('Erro gerado')

//Tente executar alguma coisa, se der erro execute o catch automaticamente

function execute() {
  executeTo();
}
function executeTo() {
  throw new Error("Ah não, deu erro!");
}

function init() {
  try {
    execute();
  } catch (e) {
    console.log(`Temos um problema! ${e.message}`);
  }
}

init();
console.log("Depois do Erro");
