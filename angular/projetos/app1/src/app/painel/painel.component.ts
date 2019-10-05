import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frase } from 'src/shared/frase.model';
import { FRASES } from './frases-mock'


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public progresso: number = 0;
  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = '';
  public rodada: number = 0;
  public rodadaFrase: Frase;
  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter;


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
      this.rodada++
      this.progresso = this.progresso + 25
      this.trocaFrase();
      this.resposta = '';
    } else {
      alert('A traducao esta errada!')
      this.tentativas--;

      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota');
      }

    }
  }

  private trocaFrase(): void {
    if (this.rodada == 4) {
      this.encerrarJogo.emit('vitoria');
        this.rodada = 0;
    }
    this.rodadaFrase = this.frases[this.rodada];
  }
}
