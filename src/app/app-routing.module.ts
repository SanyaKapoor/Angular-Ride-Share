import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentComponent } from './current/current.component';
import { PastComponent } from './past/past.component';
import { JoinpoolComponent } from './joinpool/joinpool.component';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import {AboutComponent} from './about/about.component'

const routes: Routes = [
  {path:'currentpool', component:CurrentComponent},
  {path:'pastrides', component:PastComponent},
  {path:'joinpool', component:JoinpoolComponent},
  {path:'createpool', component:CreateComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'user',component:UserhomeComponent},
  {path:'about', component:AboutComponent},
  {path: '', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[CurrentComponent,PastComponent,JoinpoolComponent,CreateComponent]
