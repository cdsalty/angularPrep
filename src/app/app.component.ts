import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //pulling our app into html file; scripts injected dynmicaly
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Christopher';  // As of app initial setup, it was title = 'my-first-app'
}
