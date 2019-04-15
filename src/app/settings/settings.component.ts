import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Settings} from './settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: Settings = new Settings();

  constructor(private cookieService: CookieService) {
  }

  ngOnInit() {
    let cookieValue = this.cookieService.get('settings');
    console.log(cookieValue.length);

    if (cookieValue.length > 0) {
      this.settings = JSON.parse(cookieValue);
    } else {
      this.settings.font = 'Consolas';
      this.settings.fontSize = '18';
      this.saveCookie();
    }
  }

  saveSettings($event) {
    $event.preventDefault();
    this.saveCookie();
    console.log('ss')
  }

  //TODO: More settings

  saveCookie() {
    this.cookieService.set('settings', JSON.stringify(this.settings));
  }
}
