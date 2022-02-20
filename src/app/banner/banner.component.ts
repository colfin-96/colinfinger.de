import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  animateChild,
  query,
  group,
  AnimationEvent,
} from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('initializeBanner', [
      transition(':enter', [
        group([
          animate(
            '1s cubic-bezier(0.65, 0, 0.35, 1)',
            style({
              backgroundColor: 'rgba(28 25 23 / 1)',
            })
          ),
          animate(
            '0.4s 2.5s cubic-bezier(0.65, 0, 0.35, 1)',
            style({
              opacity: 0,
            })
          ),
          query('@innerText', animateChild()),
          query('@innerText2', animateChild()),
          query('@line', animateChild()),
        ]),
      ]),
    ]),
    trigger('innerText', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate(
          '300ms 500ms cubic-bezier(0.65, 0, 0.35, 1)',
          style({ opacity: 1 })
        ),
      ]),
    ]),
    trigger('innerText2', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate(
          '300ms 500ms cubic-bezier(0.65, 0, 0.35, 1)',
          style({ opacity: 1 })
        ),
      ]),
    ]),
    trigger('line', [
      transition(':enter', [
        style({
          transform: 'scale(0,0)',
        }),
        animate(
          '0.5s 0.5s cubic-bezier(0.65, 0, 0.35, 1)',
          style({
            transform: 'scale(1,1)',
          })
        ),
      ]),
    ]),
  ],
})
export class BannerComponent implements OnInit {
  componentVisible = true;

  constructor() {}

  ngOnInit(): void {}

  onInitializeBannerDone(event: AnimationEvent) {
    console.log(event);
    this.componentVisible = false;
  }
}
