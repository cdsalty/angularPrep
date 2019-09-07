import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}



// selector: 'app-servers',
//   template: `<app-server></app-server> <app-server></app-server>`,
  // styleUrls: ['./servers.component.css']

// templateUrl: '/servers.component.html',