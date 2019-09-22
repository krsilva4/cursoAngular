"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = '';
        this.carroPreferido = '';
        this.carro = '';
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
    };
    Pessoa.prototype.dizerQueTemCarro = function () {
        return this.carroPreferido;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
