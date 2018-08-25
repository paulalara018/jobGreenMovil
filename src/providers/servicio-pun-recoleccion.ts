import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoReciclajeModel } from '../pages/model/tipo-reciclaje-model';
import { Subject, Observable } from '../../node_modules/rxjs';

@Injectable()
export class ServicioPunRecoleccion {
  private URL_BASE = "/jobGreen/puntosRecoleccion";
  public contextoService: Subject<Map<string, any>> = new Subject<Map<string, any>>();

  constructor(public http: HttpClient) {
    console.log('Hello Puntos de Recolección');
  }

  public getAll(): Observable<Array<ServicioPunRecoleccion>> {
    return this.http.get<Array<ServicioPunRecoleccion>>(this.URL_BASE);
  }
}