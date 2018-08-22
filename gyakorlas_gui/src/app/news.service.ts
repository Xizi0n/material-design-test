import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './news.model';
import 'rxjs/add/operator/map';
import { Observable } from '../../node_modules/rxjs/Observable';

@Injectable()
export class NewsService {

  API_KEY = 'ad88b53345fc4d81841c61e9db0ad5ce';
  apiUrl = 'https://newsapi.org/v2/top-headlines?q=trump&apiKey=ad88b53345fc4d81841c61e9db0ad5ce';

  constructor(private http: HttpClient) { }
  getNews(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
