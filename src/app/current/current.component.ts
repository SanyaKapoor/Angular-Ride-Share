import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { DisplayRequestsComponent } from '../display-requests/display-requests.component';
import {PoolService} from '../shared/pool.service';
import {Pool} from '../pool';
import {Router} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
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

  readPools(){
    this.router.navigate(["/currentpool"]);
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
        this.router.navigate['/currentpools'];
      } ,
      error=>{
        console.log(error);
      }
    )
    
  }
  
  // openDialog(){
  //   this.dialog.open(DialogExampleComponent);
  // }
  openDialog1(pool){
    this._poolService.setter(pool);
    this.dialog.open(DisplayRequestsComponent);
  }

  ngOnInit(): void {
    this.readPools();
   }

}


