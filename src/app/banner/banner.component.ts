import { Component, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { bannerAnimation } from './banner.animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [bannerAnimation],
})
export class BannerComponent implements OnInit {
  componentVisible = true;

  constructor() {}

  ngOnInit(): void {}

  onInitializeBannerDone() {
    this.componentVisible = false;
  }
}
