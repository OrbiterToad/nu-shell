import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  date: Date = new Date();

  constructor() {
  }

  ngOnInit() {
    let self = this;
    const updateTime = function () {
      self.date = new Date();
      setTimeout(updateTime, 1000);
    };

    updateTime();
  }
}
