import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { } from '@angular/flex-layout';

@Component({
  selector: 'app-productList',
  templateUrl: './productList.component.html'
})
export class ProductListComponent {

  constructor(private productService: ProductService) {

  }
}
