import { Component, OnInit, Input } from '@angular/core';
import { News } from '../news.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @Input() article: News;

  constructor() { }

  ngOnInit() {
  }

}
