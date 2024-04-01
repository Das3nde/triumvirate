import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { RulesComponent } from './rules/rules.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        RandomQuoteComponent,
        RulesComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
