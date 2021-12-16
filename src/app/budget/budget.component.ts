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
  // rent = this.expenses[0].cost 
  // phone = this.expenses[1].cost
  // bills = this.expenses[2].cost
  // car = this.expenses[3].cost
  // misc = this.expenses[4].cost

   
  

  constructor() { }

  ConvertToInt(val){
    return parseInt(val);
  }
    getTotalCost(){
      // let totalCost: number = this.expenses.map(
      //   a => a.cost
      //   ).reduce(function(a,b){
      //     return a + b 
      //   })
      //   console.log(totalCost)
      //   return totalCost
      console.log(this.expenses[0].cost)
      let totalCost: number = +(this.expenses[0].cost) + +(this.expenses[1].cost) + +(this.expenses[2].cost) + +(this.expenses[3].cost) + +(this.expenses[4].cost)
      return totalCost
    }

    onChangeCost(event: any){
      console.log('something')
      let newCost = event.target.value
      let originalExpense = this.expenses.find(
        expense => expense.name == event.target.name
        )
      this.expenses.find(
        expense => expense == originalExpense
      ).cost = newCost
      console.log(this.expenses)
      // console.log(originalExpense)
      
      
    }
    

  ngOnInit(): void {
    
  }

}
