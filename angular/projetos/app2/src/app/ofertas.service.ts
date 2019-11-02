import { Oferta } from './shared/oferta.model'
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'; 
import {URL_API} from './app.api';


@Injectable()
export class OfertasService {

    constructor(private http: HttpClient){}

    public getOfertas(): Observable<Oferta[]>{
      return  this.http.get<Oferta[]>(`${URL_API}?destaque=true`)
    }

    public getOfertasPorCategorias(categoria: string): Observable<Oferta[]>{
      return  this.http.get<Oferta[]>(`${URL_API}?categoria=${categoria}`)
    }

    public getOfertasPorId(id: number): Observable<Oferta[]>{
      return  this.http.get<Oferta[]>(`${URL_API}?id=${id}`)
    }
}