import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
searchText:string='';
  constructor() { }

  ngOnInit(): void {
  }
  setSearchText(value:string){
    console.log("Search Value is "+value)
this.searchText=value
  }

}
