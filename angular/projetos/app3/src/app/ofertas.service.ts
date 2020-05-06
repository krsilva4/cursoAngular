import { Oferta } from './shared/oferta.model'
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'; 
import {URL_API} from './app.api';
import { OndeFicaModel } from './oferta/onde-fica/onde.fica.model';
import { ComoUsarModel } from './oferta/como-usar/como.usar.model';


@Injectable()
export class OfertasService {

    constructor(private http: HttpClient){}

    public getOfertas(): Observable<Oferta[]>{
      return  this.http.get<Oferta[]>(`${URL_API}/ofertas?destaque=true`)
    }

    public getOfertasPorCategorias(categoria: string): Observable<Oferta[]>{
      return this.http.get<Oferta[]>(`${URL_API}/ofertas?categoria=${categoria}`)
    }

    public getOfertasPorId(id: number): Observable<any>{
      return  this.http.get<Oferta>(`${URL_API}/ofertas/${id}`)
    }

    public getOndeFicaOfertaPorId(id: number): Observable<OndeFicaModel>{
      return  this.http.get<OndeFicaModel>(`${URL_API}/onde-fica?id=${id}`)  
    }

    public getComoUsarOfertaPorId(id: number): Observable<ComoUsarModel>{
      return  this.http.get<ComoUsarModel>(`${URL_API}/como-usar?id=${id}`)  
    }
    
}