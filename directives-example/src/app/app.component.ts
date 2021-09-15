import { Component } from '@angular/core';
import arrayShuffle from 'array-shuffle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hstyle = "headerStyle";
  tokens: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
  shuffleTokens: number[] = arrayShuffle(this.tokens);
  iteration: number = 0;
  name: string = "";
  enterName(name:string)
  {
      this.name = "Welcome "+name;
  }


}
