import { Component, OnInit } from '@angular/core';
import {PoolService} from '../shared/pool.service';
import {Pool} from '../pool';

@Component({
  selector: 'app-joinpool',
  templateUrl: './joinpool.component.html',
  styleUrls: ['./joinpool.component.css']
})
export class JoinpoolComponent implements OnInit {
  public pools:Pool[];
  constructor(public _poolService:PoolService) { }

  ngOnInit(): void {
    this.readPools();
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
