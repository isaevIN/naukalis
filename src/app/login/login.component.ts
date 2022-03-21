import { Component, OnInit } from '@angular/core';
import { LoginClass } from './login.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginClass],
})
export class LoginComponent implements OnInit {
  public users: User[];
  loginUser='';
  password="";

  constructor(private loginClass: LoginClass){}

  ngOnInit(): void {
   this.loginClass.getAllUser().subscribe((data:User[])=>{
     this.users = data;
   });
  }

  loginLis(){
    console.log(this.loginUser);
    console.log(this.password);
  }
}