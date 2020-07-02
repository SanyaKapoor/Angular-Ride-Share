import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentComponent } from './current/current.component';
import { PastComponent } from './past/past.component';
import { JoinpoolComponent } from './joinpool/joinpool.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path:'currentpool', component:CurrentComponent},
  {path:'pastrides', component:PastComponent},
  {path:'joinpool', component:JoinpoolComponent},
  {path:'createpool', component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[CurrentComponent,PastComponent,JoinpoolComponent,CreateComponent]
