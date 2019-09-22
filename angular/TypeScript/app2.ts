import Carro from './Carro'
import {Pessoa} from './Pessoa'
import Concessionaria from './Concessionaria'

/*Criando carro*/
let carroA = new Carro('Ford ka',2)
let carroB = new Carro('Gol',4)
let carroC = new Carro('Fiat',4)

/*Criando lista de carros*/
let listaCarros :Carro[] = [carroA, carroB, carroC]
let concessionaria = new Concessionaria('av caxanga' ,listaCarros)
//console.log(concessionaria.mostrarListaDeCarros())

/*Comprar Carro*/
let cliente = new Pessoa('Kenne','Ford Ka')
concessionaria.mostrarListaDeCarros().map((carro: Carro)=>{

    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro)
    }
})


console.log(cliente.dizerQueTemCarro())