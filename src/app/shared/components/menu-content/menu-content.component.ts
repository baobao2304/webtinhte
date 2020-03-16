import { Component, OnInit } from '@angular/core';
import { TRADEMARKS } from 'src/app/core/Mock/mock-trademark';

@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.css']
})
export class MenuContentComponent implements OnInit {

  constructor() { }
  trademarkss = TRADEMARKS;
  ngOnInit(): void {
  }

}
