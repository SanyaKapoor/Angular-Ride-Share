import { Component, OnInit } from '@angular/core';
import {PoolService} from '../shared/pool.service';
import {Pool} from '../pool';
import {Router} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-joinpool',
  templateUrl: './joinpool.component.html',
  styleUrls: ['./joinpool.component.css']
})
export class JoinpoolComponent implements OnInit {
  public pools:Pool[];
  username:String = 'guest';
  constructor(public _poolService:PoolService, private router:Router, private _userService:UserService) { 
    this._userService.user()
    .subscribe(
      data => this.addName(data),
      error =>this.router.navigate(['/login'])
    )
   }

  addName(data){
    this.username = data.username;
    console.log(this.username);
  }

  ngOnInit(): void {
    this.readPools();
  }

join(pool){
    pool.participants=this.username;
    this._poolService.addParticipant(pool).subscribe(
      data =>{
        console.log(data);
        //this.router.navigate['/currentpools'];
      } ,
      error=>{
        console.log(error);
      }
    )
  }


  readPools(){
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

}
