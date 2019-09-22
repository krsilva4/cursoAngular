import DaoInterface from './DaoInterface'
import {Pessoa} from './Pessoa'
export default class PessoaDao  {
    nomeTabela: string = 'tb_pessoa'

    inserir(object: Pessoa): boolean {
        console.log('logica de inserte Pessoa')
        return true
    }
    atualizar(object: Pessoa): boolean {
        console.log('logica de atualizar')
        return true
    }
    remover(id: number): Pessoa {
        console.log('logica de remover')
        return new Pessoa('','')
    }
    selecionar(id: number): Pessoa {
        console.log('logica de select')
        return new Pessoa('', '')
    }
    selecionarTodos(): [Pessoa] {
        console.log('logica de select *')
        return [new Pessoa('', '')]
    }
}