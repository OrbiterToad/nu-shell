import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  commands: ConsoleCommand[] = [
    {type: 'info', value: '> nu-shell@0.0.0 start D:\\Projects\\learning\\nu-shell'},
    {type: 'info', value: '> ng serve'},
    {type: 'info', value: 'Date: 2019-04-15T12:42:48.489Z - Hash: 95912982d6c7b0035bf0 - Time: 243ms'},
    {type: 'info', value: '4 unchanged chunks'},
    {type: 'success', value: 'chunk {main} main.js, main.js.map (main) 17.7 kB [initial] [rendered]'},
    {type: 'error', value: 'i ｢wdm｣: Compiled successfully.'}
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
    if (this.command != '') {
      this.commands.push({type: 'info', value: this.command});
      document.getElementById('commandline').scrollIntoView(true);
      this.command = '';
    }
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
