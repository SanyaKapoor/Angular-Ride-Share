import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { DisplayRequestsComponent } from '../display-requests/display-requests.component';
import {PoolService} from '../shared/pool.service';
import {Pool} from '../pool';
import {Router} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css'],
})
export class PastComponent{
  
  public pools:Pool[];
  username:String = 'guest';
  constructor(public _poolService:PoolService, public dialog: MatDialog, private router:Router, private _userService:UserService) { 
  this._userService.user()
    .subscribe(
      data => this.addName(data),
      error =>this.router.navigate(['/login'])
    )
   }
   

  addName(data){
    this.username = data.username;
  }
  compareDates(date){
    return date < '2020/07/13';
  }

  readPools(){
    this.router.navigate(["/pastrides"]);
    this._poolService.readPools().subscribe(
      data =>{
        console.log(data);
        this.pools=data['msg'];
      } ,
      error=>{
        console.log(error);
      }
    )
  }

  delete(id){
    id=String(id);
    this._poolService.deletePool(id).subscribe(
      data =>{
        console.log(data);
        this.pools=data['msg'];
        this.router.navigate['/pastrides'];
      } ,
      error=>{
        console.log(error);
      }
    )
    
  }

  ngOnInit(): void {
    this.readPools();
   }

}