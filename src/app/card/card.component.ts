import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title = '';
  @Input() height = '';
  @Input() width = '';

  cardStyles!: { [key: string]: string };

  constructor() {}

  ngOnInit(): void {
    this.cardStyles = { height: this.height, width: this.width };
  }
}
