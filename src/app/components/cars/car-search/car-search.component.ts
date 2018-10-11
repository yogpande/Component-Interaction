import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {

  selectValue = "All";

  @Input()
  All: number;

  @Input()
  Maruti: number;

  @Input()
  Skoda: number;

  @Input()
  Renault: number;

  @Input()
  Mahindara: number;

  @Output()
  onRadioButtonValueChange: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  getradiobuttonValue() {
    this.onRadioButtonValueChange.emit(this.selectValue);
    //console.log(this.selectValue);
  }

}
