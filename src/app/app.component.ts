import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RulesComponent } from './rules/rules.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {

  title = 'Triumvirate Countdown';

  nextTriumvirateDate!: Date;
  isTriumvirate: boolean = false;
  daysUntil!: number;
  hoursUntil!: number;
  minutesUntil!: number;
  secondsUntil!: number;
  ticker: any;

  @ViewChild('days', { static: true }) days!: ElementRef;
  @ViewChild('hours', { static: true}) hours!: ElementRef;
  @ViewChild('minutes', { static: true}) minutes!: ElementRef;
  @ViewChild('seconds', { static: true}) seconds!: ElementRef;

  ngAfterViewInit(): void {
    if (!this.isTriumvirate) {
      this.ticker = setInterval(() => {
        const today = new Date();
        if (today >= this.nextTriumvirateDate) {
          this.isTriumvirate = true;
          clearInterval(this.ticker);
        }
        this.daysUntil = Math.floor((this.nextTriumvirateDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
        this.hoursUntil = 24 - 1 - today.getHours();
        this.minutesUntil = 60 - 1 - today.getMinutes();
        this.secondsUntil = 60 - 1 - today.getSeconds();
      }, 1000);
    }
  }

  constructor() {
    // Set the next triumvirate date...
    // The triumvirate is always on the first saturday on or after April 24
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const currentDate = now.getDate();
    const today = new Date(currentYear, currentMonth, currentDate);

    const getTriumvirateDate = (year: number) => {
      const newmans = new Date(year, 3, 24);
      return new Date(year, 3, 24 + 6 - newmans.getDay());
    }

    const currentYearTriumvirate = getTriumvirateDate(currentYear);
    if (currentYearTriumvirate.getTime() == today.getTime()) {
      this.isTriumvirate = true;
    }
    this.nextTriumvirateDate = currentYearTriumvirate > today ? currentYearTriumvirate : getTriumvirateDate(currentYear + 1);
  }
}