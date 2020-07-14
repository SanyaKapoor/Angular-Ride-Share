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
  //public pools:Pool[];
  public pool;
  title="Sanya";
  title1="Rishikesh";
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public _poolService:PoolService, private router:Router) { }

  ngOnInit(): void {
    this.pool=this._poolService.getter();
    console.log(this.pool);
  }

  accept(participant){
    this.pool.participants=participant;
    this._poolService.addParticipant(this.pool).subscribe(
      data =>{
        console.log(data);
        this.router.navigate['/currentpools'];
      } ,
      error=>{
        console.log(error);
      }
    )
  }

  checkParticipant(title){
    return (this.pool.participants.indexOf(title) < 0)
    }

  reject(participant){
    this.pool.participants=participant;
    this._poolService.deleteParticipant(this.pool).subscribe(
      data =>{
        console.log(data);
        this.router.navigate['/currentpools'];
      } ,
      error=>{
        console.log(error);
      })
  }
}