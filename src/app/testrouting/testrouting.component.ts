import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fruit } from '../shared/models/fruit';
import { FruitService } from '../core/services/service-fruits';

@Component({
  selector: 'app-testrouting',
  templateUrl: './testrouting.component.html',
  styleUrls: ['./testrouting.component.css']
})
export class TestroutingComponent implements OnInit {
  clickMessage1 = '';
  clickMessage2 = '';
  values1 = '';
  values2 = '';
  clicks = 0;
  fruits1: Fruit [] = [];
  fruits2: Fruit [] = [];
  lowercase;
  constructor(
    private router: Router,
    private fruitservice: FruitService,
  ) {}

  ngOnInit() {
    console.log('configured routes: ', this.router.config);
    this.getFruit();
  }
  getHello() {
    this.clickMessage1 = 'Click da thanh cong!!';
    this.clicks++;
  }
  getFruit() {
    this.fruitservice.getProduct().subscribe(data => (this.fruits1 = data));
  }
  // onClickMe2(event1: any) {
  //   const evtMsg = event1 ? ' Event target is ' + event1.target.tagName  : '';
  //   this.clickMessage2 = (`Click #${this.clicks++}. ${evtMsg}`);
  // }
  onKey1(event: KeyboardEvent) { // with type info
    this.values1 += (event.target as HTMLInputElement).value + ' | ';
  }
  onKey2(value: string) {
    this.values2 += value + ' | ';
  }
  findFruit(event: KeyboardEvent) {
    this.fruits2 = [];
    (event.target as HTMLInputElement).value.toLowerCase();
    console.log('batdau');
    console.log((event.target as HTMLInputElement).value.toLowerCase());

    for ( const i of this.fruits1) {
      this.lowercase = i.tenfruit.toLowerCase();
      console.log(this.lowercase);
      console.log(this.lowercase.indexOf((event.target as HTMLInputElement).value));
      if (this.lowercase.indexOf((event.target as HTMLInputElement).value) > -1 ) {
        this.fruits2.push(i);
      }
    }
  }
}
