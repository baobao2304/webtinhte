import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewinfomainComponent } from './newinfomain/newinfomain.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { ActivatedRoute } from '@angular/router';

const routes = [
  {
      path     : 'newinfo/:id',
      component: NewinfomainComponent,
  }
];


@NgModule({
  declarations: [NewinfomainComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule]
})
export class NewInfoModule  {
  // constructor( implements OnInit
  //   private route: ActivatedRoute,
  // ) { }
  // this.route.paramMap.subscribe(params => {
  //   this.product = products[+params.get('productId')];
  // });
}
