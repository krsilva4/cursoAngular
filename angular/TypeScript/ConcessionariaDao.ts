import DaoInterface from './DaoInterface'
import Concessionaria from './Concessionaria'
export default class ConcessionariaDao {
    nomeTabela: string = 'tb_concessionaria'

    inserir(Concessionaria: any): boolean {
        console.log('logica de inserte')
        return true
    }
    atualizar(Concessionaria: any): boolean {
        console.log('logica de atualizar')
        return true
    }
    remover(id: number): Concessionaria {
        console.log('logica de remover')
        return new Concessionaria('', [])
    }
    selecionar(id: number): Concessionaria {
        console.log('logica de select')
        return new Concessionaria('', [])
    }
    selecionarTodos(): [Concessionaria] {
        console.log('logica de select *')
        return [new Concessionaria('', [])]
    }
}