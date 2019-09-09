import { Component } from '@angular/core';

@Component({
  selector: 'app-server', // The selector value is what is used to call on it in outher html files (<app-server></app-server>)
  templateUrl: 'server.component.html'
})

export class ServerComponent {
  serverId:number = 10;
  serverStatus:string = "offline";
      // to get serverId and serverStatus, use data binding in the html file to connnect: {{ serverId}}

  getServerStatus(){
    return this.serverStatus;
  }
}