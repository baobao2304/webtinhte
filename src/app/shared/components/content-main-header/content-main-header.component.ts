import { Component, OnInit, HostListener } from '@angular/core';
import { INFOHOTS } from 'src/app/core/Mock/mock-infohot';
import { InfoHot } from '../../models/infohot';

@Component({
  selector: 'app-content-main-header',
  templateUrl: './content-main-header.component.html',
  styleUrls: ['./content-main-header.component.css']
})
export class ContentMainHeaderComponent implements OnInit {

  constructor() { }
  inforhot: InfoHot[] = INFOHOTS.slice(2 , INFOHOTS.length);
  inforhot1 = INFOHOTS[0];
  inforhot2 = INFOHOTS[1];
  ngOnInit(): void {
    // this.editARRinfo(this.inforhot);
  }
  // editARRinfo(infor: InfoHot[]): void {
  //   for (let i = 2; i < INFOHOTS.length; i++) {
  //     infor.push(INFOHOTS[i]);
  //     // infor.
  //   }
  // }
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event){
    console.log(event);
    console.log('now you are scrolling event');
  }
}
