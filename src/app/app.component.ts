import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
     '../assets/css/bootstrap.min.css',
  '../assets/css/font-awesome.min.css',
  //'../assets/css/aos.css',
   '../assets/css/owl.theme.default.min.css',
  '../assets/css/templatemo-digital-trend.css'
]
})
export class AppComponent {
  title = 'AngularSprint2';
  isYellow: boolean = true;
  isBlack: boolean = false;

  
  makeBlack(){
    this.isYellow = false;
    this.isBlack = true;
  }

  makeYellow(){
    this.isYellow = true;
    this.isBlack = false;
  }

  nightMode(){
    if (this.isYellow == true){
    this.makeBlack()
    }else {
      this.makeYellow()
    }
  } 
}
