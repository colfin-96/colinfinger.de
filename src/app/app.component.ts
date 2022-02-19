import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app';
  age = 0;

  ngOnInit() {
    const birthday = new Date(1996, 4, 25);
    const time = Math.abs(Date.now() - birthday.getTime());
    this.age = Math.floor(time / (1000 * 3600 * 24) / 365.25);
  }
}
