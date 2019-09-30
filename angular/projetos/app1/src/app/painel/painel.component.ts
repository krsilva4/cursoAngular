import { Component, OnInit } from '@angular/core';
import { Frase } from 'src/shared/frase.model';
import { FRASES } from './frases-mock'


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = '';
  public rodada: number = 0;
  public rodadaFrase: Frase;

  constructor() {
    this.trocaFrase();
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A traducao esta correta!')
      this.rodada++
      this.trocaFrase();
    }else{
      alert('A traducao esta errada!')
    }
  }

  private trocaFrase(): void {
    this.rodadaFrase = this.frases[this.rodada];
  }
}
