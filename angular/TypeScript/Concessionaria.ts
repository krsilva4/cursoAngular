
import Carro from './Carro'
import ConcessionariaInterfase from './ConcessionariaInterfase'

export default class Concessionaria implements ConcessionariaInterfase {
    private endereco: string = ''
    private listaDeCarros: any

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }
    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros;
    }
    public fornecerHorarioDeFuncionario(): string {
        return 'De segunda a sexta das 08:00 as 18:00'
    }
}