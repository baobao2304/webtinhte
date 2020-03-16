import { Component, OnInit } from '@angular/core';
import { NEWINFOS } from 'src/app/core/Mock/mock-newinfo';

@Component({
  selector: 'app-content-new-information',
  templateUrl: './content-new-information.component.html',
  styleUrls: ['./content-new-information.component.css']
})
export class ContentNewInformationComponent implements OnInit {

  constructor() { }
  newinfo = NEWINFOS;
  ngOnInit(): void {
  }

}
