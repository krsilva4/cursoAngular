import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { OfertaJava } from '../shared/ofertaJava.model ';
import { Oferta } from '../shared/oferta.model';
import { Observable, Observer, interval, observable, Subscription } from 'rxjs';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit { 

  private tempoObservablaSubscription: Subscription
  private meuObservableTesteSubscription: Subscription;
  public oferta: Oferta
  constructor(private route: ActivatedRoute,
    private ofertaService: OfertasService) { }

  ngOnInit() {

    let id: number  = this.route.snapshot.params['id']
    this.ofertaService.getOfertasPorId(id)
        .subscribe(response => console.log(this.oferta = response));  

    let meuObservableteste = Observable.create((observer: Observer<number>) => {
      observer.next(1)
      observer.next(2)
      observer.complete()
      observer.error("algum erro foi encontrado no stream de eventos! erro")
      
    })
    
    this.meuObservableTesteSubscription = meuObservableteste.subscribe(
      (resultado: number) => console.log(resultado + 10),
      (erro: string) => console.log(erro),
      () => console.log("Stream de eventos foi finalizada!!!")
    )
   
    let tempo =  interval(2000);
    this.tempoObservablaSubscription = tempo.subscribe((intervalo: number) => {
      console.log(intervalo)
    })
  }
}
