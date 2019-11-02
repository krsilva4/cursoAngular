import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta
  constructor(private route: ActivatedRoute, 
              private ofertaService: OfertasService ) { }

  ngOnInit() {
    
     let id: number  = this.route.snapshot.params['id']
    this.ofertaService.getOfertasPorId(id)
        .subscribe(response => console.log(this.oferta = response.shift()))
        
  }

}
