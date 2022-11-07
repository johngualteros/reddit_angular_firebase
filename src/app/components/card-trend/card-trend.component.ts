import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-trend',
  templateUrl: './card-trend.component.html',
  styleUrls: ['./card-trend.component.scss']
})
export class CardTrendComponent implements OnInit {

  @Input() trend: any;
  constructor() { }

  ngOnInit(): void {
  }

}
