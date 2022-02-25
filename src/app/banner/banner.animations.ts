import {
  animate,
  animateChild,
  animation,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

const initializeBannerAnimation = trigger('initializeBanner', [
  transition(':enter', [
    group([
      animate(
        '1s cubic-bezier(0.65, 0, 0.35, 1)',
        style({
          backgroundColor: 'rgba(28 25 23 / 1)',
        })
      ),
      query('@innerText', animateChild()),
      query('@innerText2', animateChild()),
      query('@line', animateChild()),
      animate(
        '0.4s 2.5s cubic-bezier(0.65, 0, 0.35, 1)',
        style({
          opacity: 0,
        })
      ),
    ]),
  ]),
]);

const innerTextAnimation = trigger('innerText', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(
      '500ms 500ms cubic-bezier(0.65, 0, 0.35, 1)',
      style({ opacity: 1 })
    ),
  ]),
]);

const innerText2Animation = trigger('innerText2', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(
      '500ms 500ms cubic-bezier(0.65, 0, 0.35, 1)',
      style({ opacity: 1 })
    ),
  ]),
]);

const lineAnimation = trigger('line', [
  transition(':enter', [
    style({
      transform: 'scale(0,0)',
    }),
    animate(
      '0.7s 1s cubic-bezier(0.65, 0, 0.35, 1)',
      style({
        transform: 'scale(1,1)',
      })
    ),
  ]),
]);

export const bannerAnimation = [
  initializeBannerAnimation,
  innerTextAnimation,
  innerText2Animation,
  lineAnimation,
];
