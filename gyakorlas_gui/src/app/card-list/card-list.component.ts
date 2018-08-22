import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import 'rxjs/add/operator/map';
import { NewsService } from '../news.service';
import { News } from '../news.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  API_KEY = 'ad88b53345fc4d81841c61e9db0ad5ce';

  news: News[] = [];
  constructor(private newsService: NewsService) {}


  ngOnInit() {
    this.newsService.getNews().subscribe( data => {
      data.articles.map( (e) => {
        this.news.push(new News(e.author, e.description, e.title, e.publishedAt, e.url, e.urlToImage));
      } );
      console.log(this.news);
    } );
  }

}
