import { Component } from '@angular/core';

import { QUOTES } from './quotes';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-random-quote',
    templateUrl: './random-quote.component.html',
    styleUrls: ['./random-quote.component.css'],
    standalone: true,
    imports: [MatButtonModule]
})
export class RandomQuoteComponent {
  quotes = QUOTES;
  activeQuote!: String;

  getQuote() {
    this.activeQuote = this.quotes[(Math.floor(Math.random() * this.quotes.length))];
  }

  constructor() {
    this.getQuote();
  }
}