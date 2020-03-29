import { Component, OnInit } from '@angular/core';
import { TAGHOT } from 'src/app/core/Mock/mock-taghot';
import { FruitService } from 'src/app/core/services/service-fruits';
import { Fruit } from 'src/app/shared/models/fruit';

@Component({
  selector: 'app-homemain',
  templateUrl: './homemain.component.html',
  styleUrls: ['./homemain.component.css']
})
export class HomemainComponent implements OnInit {
  taghots = TAGHOT;
  fruits: Fruit[] = [];
  constructor(
    private fruitservice: FruitService
  ) { }
  ngOnInit(): void {
    this.getFruits();
  }
  getFruits(): void {
    this.fruitservice.getProduct().subscribe(
      data => { this.fruits = data; });
  }
}
