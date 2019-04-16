import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Settings} from './settings/settings';
import {Theme} from './settings/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private cookieService: CookieService) {
  }

  private settings: Settings = new Settings();
  theme: Theme = new Theme(
    'light',
    '#ffffff',
    '#9c9c9c',
    '#a9a9a9',
    '#cfcfcf',
    '#000000',
    '#708090',
    '#a9a9a9',
    '#b6b6b6');

  ngOnInit() {
    this.setSettings();
  }


  setSettings() {
    let cookieValue = this.cookieService.get('settings');
    console.log(cookieValue.length);

    console.log(cookieValue);

    if (cookieValue.length > 0) {
      this.settings = JSON.parse(cookieValue);
    } else {
      this.settings.font = 'Consolas';
      this.settings.fontSize = '18';
      this.settings.theme = this.theme;
      this.saveCookie();
    }

    const sheet = document.createElement('style');
    sheet.innerHTML = 'body {' +
      ' font-size: ' + this.settings.fontSize + 'px;' +
      ' font-family: ' + this.settings.font + ';' +
      ' color: ' + this.settings.theme.colorFont + ';' +
      ' background-color: ' + this.settings.theme.colorBackground + ';' +
      '}' +
      '.console {' +
      ' background-color: ' + this.settings.theme.colorBackground + ';' +
      '}' +
      '.console-text {' +
      ' color: ' + this.settings.theme.colorConsoleFont + ';' +
      '}' +
      '.console-tag {' +
      ' background-color: ' + this.settings.theme.colorTags + ' !important;' +
      '}' +
      '.arrow {' +
      ' font-size: ' + (parseInt(this.settings.fontSize) * 8) + 'px !important;' +
      ' border-left-color: ' + this.settings.theme.colorTags + ' !important;' +
      ' background-color: ' + this.settings.theme.colorInput + '!important;' +
      '}' +
      '.button {' +
      ' background-color: ' + this.settings.theme.colorButton + ';' +
      ' color: ' + this.settings.theme.colorFont + ';' +
      '}' +
      '.button:hover {' +
      ' color: ' + this.settings.theme.colorFont + ';' +
      '}' +
      '.button-selected {' +
      ' background-color: ' + this.settings.theme.colorButtonActive + ';' +
      ' color: ' + this.settings.theme.colorFont + ';' +
      '}' +
      '.console-input {' +
      ' background-color: ' + this.settings.theme.colorInput + '!important;' +
      ' color: ' + this.settings.theme.colorFont + ';' +
      '}' +
      '.console-header {' +
      ' background-color: ' + this.settings.theme.colorBackgroundTaskbar + '!important;' +
      '}' +
      '.console-footer {' +
      ' background-color: ' + this.settings.theme.colorBackgroundTaskbar + '!important;' +
      '}';

    document.body.appendChild(sheet);
  }

  saveCookie() {
    this.cookieService.set('settings', JSON.stringify(this.settings));
  }
}
