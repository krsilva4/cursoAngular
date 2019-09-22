import DaoInterface from './DaoInterface'

export default class Dao<T> implements DaoInterface<T>{
    nomeTabela: string = 'tb_pessoa'

    inserir(object: T): boolean {
        console.log('logica de inserte')
        return true
    }
    atualizar(object: T): boolean {
        console.log('logica de atualizar')
        return true
    }
    remover(id: number): T {
        console.log('logica de remover')
        return Object()
    }
    selecionar(id: number): T {
        console.log('logica de select')
        return Object()
    }
    selecionarTodos(): [T] {
        console.log('logica de select *')
        return Object()
    } 
}