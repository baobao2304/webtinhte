import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomemainComponent } from './homemain/homemain.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ConfigService } from 'src/app/config/config-service';


const routes = [
  {
      path     : '',
      component: HomemainComponent,
  }
];


@NgModule({
  declarations: [HomemainComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeModule { }
