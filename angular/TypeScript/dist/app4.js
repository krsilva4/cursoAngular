"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = require("./Pessoa");
var Dao_1 = __importDefault(require("./Dao"));
var concessionaria = new Concessionaria_1.default('', []);
var dao1 = new Dao_1.default();
var dao2 = new Dao_1.default();
var pessoa = new Pessoa_1.Pessoa('', '');
dao2.atualizar(pessoa);
dao1.inserir(concessionaria);
