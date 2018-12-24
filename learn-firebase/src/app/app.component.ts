import { Component } from '@angular/core';
import { ROUTER_CONFIGURATION} from '@angular/router'

 import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent {
  title = 'app works!';
 
  fruits = {
    "name": "Apple",
    "color": "red"
  }

  yell(e) {
    alert("I'm yelling");    
  }
}
