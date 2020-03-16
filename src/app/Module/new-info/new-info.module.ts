import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewinfomainComponent } from './newinfomain/newinfomain.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



const routes = [
  {
      path     : '',
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


}
