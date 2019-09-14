import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/compiler/src/core';

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
  serverName = "I display because of TWO-WAY-BINDING";

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

  onUpdateServerName(event: Event) { // need to inquire why event: is 'Event' or 'Text' or 'Input'
    // console.log(event); by clicking target, you see the ending value of whatever was typed
    // While looking through the event, I also noticed it list the 'TYPE' of event, which was "Event"
    // changed event: any to event: Event
    // this.serverName = event.target.value; // gives error, 'value' doesn't exist on 'EventTarget' so changed without explanation
    this.serverName = (<HTMLInputElement>event.target).value; 
  }

}



// selector: 'app-servers',
//   template: `<app-server></app-server> <app-server></app-server>`,
  // styleUrls: ['./servers.component.css']

// templateUrl: '/servers.component.html',