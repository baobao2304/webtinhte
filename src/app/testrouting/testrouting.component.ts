import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testrouting',
  templateUrl: './testrouting.component.html',
  styleUrls: ['./testrouting.component.css']
})
export class TestroutingComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('configured routes: ', this.router.config);
  }


}
