import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NEWINFOS } from 'src/app/core/Mock/mock-newinfo';
import { NewInfo } from 'src/app/shared/models/newinfo';

@Component({
  selector: 'app-newinfomain',
  templateUrl: './newinfomain.component.html',
  styleUrls: ['./newinfomain.component.css']
})
export class NewinfomainComponent implements OnInit {
  // idd = NEWINFOS;
  info: NewInfo;
  constructor(
    private routeactive: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.routeactive.paramMap.subscribe(data => {this.getNewINfo( data.id )  } )
    this.routeactive.params.subscribe(
      (data) => {
        // tslint:disable-next-line:radix
        this.getNewINfo(parseInt(data.id));
      }
    );
  }
  getNewINfo(idinfo: number): void {
    for ( const i of NEWINFOS) {
      if ( i.id === idinfo) {
        this.info = i;
      }
    }
  }
}
