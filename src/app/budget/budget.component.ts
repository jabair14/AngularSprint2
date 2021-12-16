import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  expenses = [
    {name: "rent", cost: 1000},
    {name: "phone", cost: 75},
    {name: "bills", cost: 250},
    {name: "car", cost: 150},
    {name: "misc", cost: 0}
  ]

   
  

  constructor() { }
    getTotalCost(){
      let totalCost: number = this.expenses.map(
        a => a.cost
      ).reduce(function(a,b){
        return a + b 
      })
      return totalCost
    }

  ngOnInit(): void {
    
  }

}
