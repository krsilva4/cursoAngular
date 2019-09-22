import Concessionaria from './Concessionaria'
import {Pessoa} from './Pessoa'
import Dao from './Dao'

let concessionaria = new Concessionaria('',[])
let  dao1: Dao<Concessionaria> =  new Dao()
let  dao2: Dao<Pessoa> =  new Dao()
let pessoa: Pessoa =  new  Pessoa('','')

dao2.atualizar(pessoa)  
dao1.inserir(concessionaria)
