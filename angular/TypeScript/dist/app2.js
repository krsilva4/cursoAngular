"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = require("./Pessoa");
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
/*Criando carro*/
var carroA = new Carro_1.default('Ford ka', 2);
var carroB = new Carro_1.default('Gol', 4);
var carroC = new Carro_1.default('Fiat', 4);
/*Criando lista de carros*/
var listaCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('av caxanga', listaCarros);
//console.log(concessionaria.mostrarListaDeCarros())
/*Comprar Carro*/
var cliente = new Pessoa_1.Pessoa('Kenne', 'Ford Ka');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerQueTemCarro());
