import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../../ofertas.service';
import { ComoUsarModel } from './como.usar.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {
  private comoUsar: ComoUsarModel
  constructor(private route: ActivatedRoute,
    private servico: OfertasService) { }

  ngOnInit() {

    this.servico.getComoUsarOfertaPorId(this.route.parent.snapshot.params['id'])
      .subscribe(response => this.comoUsar = response[0])

  }
}


