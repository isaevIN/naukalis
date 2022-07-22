import { Component, OnInit } from '@angular/core';
import { LoginClass } from './login/login.service';
import { TokenStorageService } from './_services/token/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  constructor(private tokenStorageService: TokenStorageService){}
  
  ngOnInit(): void {
    /*const savedToken = localStorage.getItem('auth-token')
    if(savedToken !==null){
      this.tokenStorageService.setToken(savedToken)
    }*/
  }
  logout(){}

}
