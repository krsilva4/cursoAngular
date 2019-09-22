import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

 let carro = new Carro('Ford ka',2)
 let moto = new Moto()

 moto.acelerar()
 moto.acelerar()
let conce = new Concessionaria('',[])
 console.log(carro)
 console.log(moto.velocidadeAtual())
 console.log(conce.fornecerHorarioDeFuncionario());