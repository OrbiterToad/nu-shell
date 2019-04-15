import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  commands: ConsoleCommand[] = [
    {type: 'a', value: 'Date: 2019-04-15T12:42:48.489Z - Hash: 95912982d6c7b0035bf0 - Time: 243ms'},
    {type: 'a', value: '4 unchanged chunks'},
    {type: 'a', value: 'chunk {main} main.js, main.js.map (main) 17.7 kB [initial] [rendered]'},
    {type: 'a', value: 'i ｢wdm｣: Compiled successfully.'}
  ];
  dir: string;
  command: string;

  constructor() {
    this.dir = '/home/nu-shell $';
    this.command = 'test';
  }

  ngOnInit() {
    //TODO: Use settings
  }

  submitCommand($event) {
    $event.preventDefault();
    this.commands.push({type: 'a', value: this.command});
    document.getElementById('commandline').scrollIntoView(true);
    //Todo: child_event run commands
  }
}

class ConsoleCommand {
  type: String;
  value: String;

  constructor(type, value) {
    this.type = value;
    this.value = value;
  }
}
