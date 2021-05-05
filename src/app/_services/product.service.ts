import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS_DATA } from '../data/products';
import { Product } from '../_models/product';
const URL = 'https://ssupermarket.herokuapp.com/api/products';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { 
  
  }
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(URL);
  }
  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${URL}/${id}`);
  }

  addProduct(product: Product): Observable<Product>{
    return this.httpClient.post<Product>(URL, product, httpOptions);
  }
  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(
      `${URL}/${product.id}`,
      product,
      httpOptions
    );
  }

}


