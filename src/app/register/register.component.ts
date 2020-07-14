import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    username: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required),
    confirmpassword: new FormControl(null,Validators.required)
  });

  constructor(private _router:Router,private _userService:UserService) { }

  ngOnInit(): void {
  }

  moveToLogin()
  {
    this._router.navigate(['/login'])
  }

  register()
  {
    if(!this.registerForm.valid)
    {
      alert('Invalid Form');
      return ; 
    }
    else if ((this.registerForm.controls.password.value!=this.registerForm.controls.confirmpassword.value))
    {
      alert('Password entered does not match with the confirm password');
      return ;
    }
    this._userService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/login']);},
      error=> {console.log(error); alert('Wrong Login Credentials Provided.');}
    )
    console.log(JSON.stringify(this.registerForm.value));
  }

}
