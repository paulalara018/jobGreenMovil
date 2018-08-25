import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoReciclajeModel } from '../../pages/model/tipo-reciclaje-model';
import { Subject, Observable } from '../../../node_modules/rxjs';

/*
  Generated class for the PruebaServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PruebaServiceProvider {
  private URL_BASE = "/jobGreen/tipoReciclaje";
  public contextoService: Subject<Map<string, any>> = new Subject<Map<string, any>>();

  constructor(public http: HttpClient) {
    console.log('Hello PruebaServiceProvider Provider');
  }

  public getAll(): Observable<Array<TipoReciclajeModel>> {
    return this.http.get<Array<TipoReciclajeModel>>(this.URL_BASE);
  }

  

}
