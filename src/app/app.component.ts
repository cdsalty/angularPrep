import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //pulling our app into html file; scripts injected dynmicaly
  templateUrl: './app.component.html',
  styles: [`
      h3 {
        color: dodgerblue;
      }
  `]
})
export class AppComponent {
 
}
