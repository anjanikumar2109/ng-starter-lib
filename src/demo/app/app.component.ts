import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LibService } from 'ng-starter-lib';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  quotes: Observable<any[]>;

  constructor(private libService: LibService) {
  }

  ngOnInit() {
    this.quotes = this.libService.getRandomQuote(null, 3);
  }
}
