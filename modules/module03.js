// const module02 = require("./module02.js")  Importação de um objeto
//module02.executa()    Chamando o método do objeto

//Atribuição por desestruturação

import { executa, oculta } from "./module03";
const { executa, oculta } = require("./module02");

//Executando um módulo importado
executa();

oculta();
