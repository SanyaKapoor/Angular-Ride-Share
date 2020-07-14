import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null, Validators.required)
  });

  constructor(private _router:Router, private _user:UserService) { }

  ngOnInit(): void {
  }
  moveToRegister()
  {
    this._router.navigate(['/register']); 
  }
  login()
  {
    if(!this.loginForm.valid)
    {
      alert('Invalid Form. Either the Form is empty or the email is not in the format student@gmail.com');
      console.log("Invalid Form"); 
      return ;
    }
    //console.log(JSON.stringify(this.loginForm.value));
    this._user.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data => {console.log(data);this._router.navigate(['/about'])},
      error => {console.log(error); alert('Wrong Login Credentials Provided.');}
    )
  }

}
