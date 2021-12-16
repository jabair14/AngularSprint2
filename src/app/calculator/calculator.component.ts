import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title : string = "Tip Calculator";
  cost: number = 0;
  tipPercentage: number = 0;
  total: number = 0;
  tipAmount: number = 0
  

  calculate(){
    this.total = ( (this.cost + (this.cost * .06 )) + (this.cost * this.tipPercentage/100));
    this.tipAmount = (this.cost * this.tipPercentage/100)
  }

}
