import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient: HttpClient) {}

  MY_SERVER = ' http://localhost:3000/products'

  getAllProducts(): Observable <Product[]> {
    return this._httpClient.get< Product[]>(this.MY_SERVER)
  }

  addProduct(product:Product): Observable <any> {
    return this._httpClient.post< any>(this.MY_SERVER,product)
  }
  deleteProduct(id:number): Observable <any> {
    return this._httpClient.delete< any>(this.MY_SERVER+'/'+id)
  }
  updateProduct(id:number,product:Product): Observable <any> {
    return this._httpClient.put< any>(this.MY_SERVER+'/'+id ,product)
  }
}
