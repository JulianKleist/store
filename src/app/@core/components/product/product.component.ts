import { Component, OnInit } from '@angular/core';
import ProductData from '../../../../assets/product.json';

interface Product {
  "id": Number;
  "name": String;
  "marca": String;
  "price": String;
  "photo": String;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = ProductData;

  constructor() { }

  ngOnInit(): void {
  }

}
