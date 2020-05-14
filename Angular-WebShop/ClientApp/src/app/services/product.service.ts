//import { Injectable } from '@angular/core';
//import { FormGroup, FormControl, Validators } from "@angular/forms";
//import * as _ from 'lodash';
//import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
//import { environment } from '../../environments/environment';
//import { Observable } from 'rxjs';
//import { Product } from '../Model/Product';


//@Injectable({
//  providedIn: 'root'
//})
//export class ProductService {
//  private apiEndpoint = 'Product';
//  private serviceUrl = environment.apiBaseUrl;

//  private _productService;
//  constructor(private productService: ProductService, private client: HttpClient) {
//    this._productService = productService;
//  }

//  getProducts(): Observable<Product[]> {
//    var url = this.serviceUrl + this.apiEndpoint
//    return this.client.get<Product[]>(url);
//  }

//  getProduct(id: string): Observable<Product> {
//    var url = this.serviceUrl + this.apiEndpoint;
//    return this.client.get<Product>(url, { params: { id: id } });
//  }
//}
