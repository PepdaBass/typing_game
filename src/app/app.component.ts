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
    this.userText = value;
  }

  compare(randomLetter: string, userLetter: string){
    if(!userLetter) {
      return 'pending';
    }

    return randomLetter === userLetter ? 'correct' : 'incorrect';
  }
}
