import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username:String = 'guest';
  constructor(private _user:UserService, private _router:Router) {
    this._user.user()
    .subscribe(
      data => this.addName(data),
      error=>this._router.navigate(['/login']),
    )
   }

  addName(data){
    this.username = data.username;
  }

  ngOnInit(): void {
  }

  logout(){
    this._user.logout()
    .subscribe(
      data=>{console.log(data),this._router.navigate(['/login'])},
      error=>console.error(error)
    )
  }


}
