import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchText: string = '';
// create an event 
@Output()
searchTextChanged:EventEmitter<string> = new EventEmitter<string>();
// 2nd argument is optional in viewChild property
// 1 read : use it to read  the different token from the queried element 
// 2 static : Determines when the query is resolve .
// true when the view is initialized (before the first change detection ) for the first time 
// false if you want it to resolved after every change detection 
@ViewChild('searchInput')
searchInputEl:ElementRef
onSearchTextChange(){
}

  updateSearchText(inputEl:HTMLInputElement){
      // this.searchText = event.target.value;
      this.searchText = this.searchInputEl.nativeElement.value
      console.log(inputEl.value)
  this.searchTextChanged.emit(this.searchText);

  }

}
