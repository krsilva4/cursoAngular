"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = 'tb_pessoa';
    }
    Dao.prototype.inserir = function (object) {
        console.log('logica de inserte');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('logica de atualizar');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('logica de remover');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('logica de select');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('logica de select *');
        return Object();
    };
    return Dao;
}());
exports.default = Dao;
