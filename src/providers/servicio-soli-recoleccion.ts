import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoReciclajeModel } from '../pages/model/tipo-reciclaje-model';
import { Subject, Observable } from '../../node_modules/rxjs';
import { ServicioPunRecoleccion } from './servicio-pun-recoleccion';

@Injectable()
export class ServicioSoliRecoleccion {
  private URL_BASE = "/jobGreen/regalos";
  public contextoService: Subject<Map<string, any>> = new Subject<Map<string, any>>();

  constructor(public http: HttpClient) {
    console.log('Hello Regalos');
  }

  public getAll(): Observable<Array<ServicioSoliRecoleccion>> {
    return this.http.get<Array<ServicioSoliRecoleccion>>(this.URL_BASE);
  }

  
}