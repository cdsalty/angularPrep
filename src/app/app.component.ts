import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //pulling our app into html file; scripts injected dynmicaly; inside the index.html
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})

export class AppComponent {
 
}


// <app-root> will now be equal to whatever is in the app.component.html;
// This is because in the index.html file, the application is pulling everything FROM <app-root> 
  // - app root is the appcomponent