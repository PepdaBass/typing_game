import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  userText: string = '';
  onInput(value: string){
    console.log(value);
   

    if(value.length === 0){
      this.userText = value;
    }
    else {
      this.userText + value;
    }
    return this.userText;
  }
}
