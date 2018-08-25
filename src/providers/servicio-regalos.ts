import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoReciclajeModel } from '../pages/model/tipo-reciclaje-model';
import { Subject, Observable } from '../../node_modules/rxjs';

@Injectable()
export class ServicioRegalos {
  private URL_BASE = "/jobGreen/regalos";
  public contextoService: Subject<Map<string, any>> = new Subject<Map<string, any>>();

  constructor(public http: HttpClient) {
    console.log('Hello Regalos');
  }

  public getAll(): Observable<Array<ServicioRegalos>> {
    return this.http.get<Array<ServicioRegalos>>(this.URL_BASE);
  }
}