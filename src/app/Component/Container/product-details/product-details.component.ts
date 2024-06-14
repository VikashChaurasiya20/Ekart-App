import { Component, Input, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from 'Models/Product';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input()
  productListComp:ProductListComponent = undefined;
  product : Product
  constructor() { }

  ngOnInit(): void {
    this.product=this.productListComp.selectedProduct;
  }

}
