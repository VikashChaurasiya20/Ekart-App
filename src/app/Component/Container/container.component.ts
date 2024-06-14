import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
searchText:string='';
@ViewChild(ProductListComponent)
productListComponent: ProductListComponent
  constructor() { }

  ngOnInit(): void {
  }
  setSearchText(value:string){
    console.log("Search Value is "+value)
this.searchText=value
  }

}
