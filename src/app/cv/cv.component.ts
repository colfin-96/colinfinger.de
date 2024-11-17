import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  items = [
    {
      key: 'Name',
      value: 'Colin Finger',
    },
    {
      key: 'Date of Birth',
      value: '25th April 1996',
    },
  ];
}
