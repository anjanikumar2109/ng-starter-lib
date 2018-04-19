import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {LibConfig} from '../type/lib-config';

@Injectable()
export class LibService {
  constructor(private httpClient: HttpClient,
              private config: LibConfig = { quoteService: 'http://quotesondesign.com/wp-json/posts' }) { }

  getRandomQuote(orderBy: string = 'rand', posts_per_page: number = 1): Observable<any[]> {
    let params: HttpParams = new HttpParams();
    params = params.set('filter[orderby]', orderBy);
    params = params.set('filter[posts_per_page]', String(posts_per_page));
    params = params.set('_', String(new Date().getTime()));
    return this.httpClient.get<any[]>(this.config.quoteService, { params });
  }
}
