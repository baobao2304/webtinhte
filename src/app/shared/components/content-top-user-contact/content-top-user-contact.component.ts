import { Component, OnInit } from '@angular/core';
import { TOPUSERS } from 'src/app/core/Mock/mock-topuser';

@Component({
  selector: 'app-content-top-user-contact',
  templateUrl: './content-top-user-contact.component.html',
  styleUrls: ['./content-top-user-contact.component.css']
})
export class ContentTopUserContactComponent implements OnInit {

  constructor() { }
  contenttop = TOPUSERS;
  ngOnInit(): void {
  }

}
