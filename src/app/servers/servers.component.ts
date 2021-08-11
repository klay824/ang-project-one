import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = ' ';
  serverCreated = false;
  servers = ['Testserver', 'testserver 2'];

  // assignment 2
  userName = ' ';
  userNameCreationStatus = 'No username yet!';

  // assignment 3
  showSecret = false;
  log = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  // assignment 2
  onCreateUsername() {
    this.userNameCreationStatus = 'Username was created and it is ' + this.userName;
  }

  onUpdateUsername(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  // assignment 3
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length) + 1;
  }
}
