import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibModule, LibConfig } from 'ng-starter-lib';

import { AppComponent }  from './app.component';

const config: { quoteService: string } = { quoteService: 'https://quotes.rest/qod' };

@NgModule({
  imports:      [ BrowserModule, LibModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    { provide: LibConfig, useValue: config },
  ],
})
export class AppModule { }
