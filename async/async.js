/* Forma elegante de trabalhar com funções assíncronas */
/* Utilizado quando temos uma promise que irá executar apenas uma vez */

function sum(x) {
  return new Promise((resolve, reject) => {
    if (Number(x) == NaN || Number(x) == undefined || typeof x != "number") {
      reject("Ta de brincadeira");
    }
    setTimeout(() => {
      resolve(x + 5000);
    }, 3000);
  });
}

async function main() {
  try {
    const resultado = await sum("#");
    console.log(`Resultado com Async/Await:${resultado}`);
  } catch (error) {
    console.log(`Temos problemas: ${error}`);
    console.log(process.env.USERNAME);
  }
}

main();
