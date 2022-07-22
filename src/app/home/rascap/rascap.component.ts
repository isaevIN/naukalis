import { Component, Injectable, OnInit } from "@angular/core";

@Component({
    selector: 'app-rascap',
    templateUrl: './rascap.component.html',
    styleUrls: ['./rascap.component.css']
  })
  
  @Injectable({
    providedIn: 'root'
  })
  export class HomeRascapComponent implements OnInit {
    
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
  }