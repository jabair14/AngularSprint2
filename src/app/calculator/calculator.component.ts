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

  foodCost: number = 0;

  tipPercentage: number = 0;

  foodTotal: number = 0;

  calculate(){
    this.foodTotal = ( (this.foodCost + (this.foodCost * .06 )) + (this.foodCost * this.tipPercentage/100));
  }
}
