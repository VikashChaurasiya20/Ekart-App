import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input()
all:number;

@Input()
inStock:number;

@Input()
outOfStock:number;

@Output()
selectedFilterRadioButtonChanged:EventEmitter<string> = new EventEmitter<string>();
selectedFilterRadioButton:string ='all';

 
  onSelectedFilterRadioButtonChanged(){
    console.log(this.selectedFilterRadioButton)
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton)
  }
  constructor() { }

  ngOnInit(): void {
  }
}
