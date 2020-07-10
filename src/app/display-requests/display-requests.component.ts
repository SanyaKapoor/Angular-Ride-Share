import { Component, OnInit } from '@angular/core';
import {PoolService} from '../shared/pool.service';
import {Pool} from '../pool';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-display-requests',
  templateUrl: './display-requests.component.html',
  styleUrls: ['./display-requests.component.css']
})
export class DisplayRequestsComponent implements OnInit {
  public pools:Pool[];
  public pool: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public _poolService:PoolService, private router:Router) { }

  ngOnInit(): void {
    this.pool=this._poolService.getter();
    //var id = this.data['id'];
  }

  accept(participant){
    this.pool.participants=[participant];
    this._poolService.addParticipant(this.pool).subscribe(
      data =>{
        console.log(data);
      } ,
      error=>{
        console.log(error);
      }
    )
  }

  reject(participant){
    this.pool.participants=[participant];
    this._poolService.deleteParticipant(this.pool).subscribe(
      data =>{
        console.log(data);
        this.pools=data['msg'];
      } ,
      error=>{
        console.log(error);
      })
    // )
    // this.router.navigate['/currentpools'];
  }

  // reject(participant){
  //   this.pool.participants=[participant];
  //   this.pool=this._poolService.deleteParticipant(this.pool);
  //   this.pool=this._poolService.getter();
  //   this.router.navigate(["/currentpool"]);

  // }


  // update(string){
  //   if(string === 'add'):

  //   this._poolService.addParticipant('').subscribe(
  //     data =>{
  //       console.log(data);
  //       this.pools=data['msg'];
  //     } ,
  //     error=>{
  //       console.log(error);
  //     }
  //   )
  // }

}