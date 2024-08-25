import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/products-interfaces';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  
  allProducts: IProduct[] = [];

  constructor(private _apiService: ApiService){}

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data) => {
      this.allProducts = data;
    });
  }

}
