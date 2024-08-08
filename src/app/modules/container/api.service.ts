import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './models/products-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://fakestoreapi.com/products';

  constructor(private _http: HttpClient) {}

  public getProducts(): Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.urlApi);
  } 

}
