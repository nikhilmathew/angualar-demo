import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService:DataService){
    

  }
  title:any = true;
  logMeIn() {
    this.title = false;
  }
  myEvent(event) {
    console.log(event);
    console.log(event.pageX)
  }
}
