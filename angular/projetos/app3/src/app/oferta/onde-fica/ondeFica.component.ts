import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../ofertas.service';
import { OndeFicaModel } from './onde.fica.model'


@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {
  private ondeFica: OndeFicaModel
  constructor(private route: ActivatedRoute, private servico: OfertasService) { }

  ngOnInit() {

    this.servico.getOndeFicaOfertaPorId(this.route.parent.snapshot.params['id'])
      .subscribe(response => this.ondeFica = response[0])

  }

}
