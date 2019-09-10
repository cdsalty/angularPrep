import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', 
  // selector: '[app-servers]'
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false; // upon the first initial load, allowNewServer is FALSE
  serverStatus = "No Server Started";

  constructor() { 
    setTimeout(() =>{
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  
  onCreateServer() {
    this.serverStatus = "Server Has Started";
  }

}



// selector: 'app-servers',
//   template: `<app-server></app-server> <app-server></app-server>`,
  // styleUrls: ['./servers.component.css']

// templateUrl: '/servers.component.html',