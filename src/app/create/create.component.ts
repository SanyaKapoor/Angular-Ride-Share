import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PoolService} from '../shared/pool.service';
import {Pool} from '../pool';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  pool= new Pool;
  createForm = new FormGroup({
    name:new FormControl(null,[Validators.required]),
    from: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
    to: new FormControl(null, Validators.required),
    time: new FormControl(null, Validators.required),
    vacancy: new FormControl(null, Validators.required),
  });

  
  constructor(private router:Router, private poolService:PoolService) { }
  
  ngOnInit(){
  }

  CreateComponent(){
    this.poolService.createPool(this.createForm.value).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(["/joinpool"]);
      },
      error=>{
        console.log(error);
      }

    )
  }

}