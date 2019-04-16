import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Settings} from './settings';
import {Theme} from './theme';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: Settings = new Settings();
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

  constructor(private cookieService: CookieService) {
  }

  ngOnInit() {
    let cookieValue: any = this.cookieService.get('settings');
    console.log(cookieValue.length);

    if (cookieValue.length > 0) {
      this.settings = JSON.parse(cookieValue);

      //Add Default Theme if no theme available in json
      if (!cookieValue.toString().includes('theme')) {
        this.settings.theme = this.theme;
        this.saveCookie();
      }

    } else {
      this.settings.font = 'Consolas';
      this.settings.fontSize = '18';
      this.saveCookie();
    }
  }

  saveSettings($event) {
    $event.preventDefault();
    this.saveCookie();
    window.location.href = '/settings';
  }

  //TODO: More settings

  saveCookie() {
    this.cookieService.set('settings', JSON.stringify(this.settings));
  }
}
