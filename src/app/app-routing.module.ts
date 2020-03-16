import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestroutingComponent } from './testrouting/testrouting.component';


const routes: Routes = [
  { path: '' , redirectTo: '/h', pathMatch: 'full'},
  { path: 'route' , component: TestroutingComponent},
  {
    path: 'h',
    loadChildren: () => import('./Module/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'n',
    loadChildren: () => import('./Module/new-info/new-info.module').then(m => m.NewInfoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
