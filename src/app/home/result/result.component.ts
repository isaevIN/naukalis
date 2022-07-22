import { Component, Injectable, OnInit } from "@angular/core";

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
  })
  
  @Injectable({
    providedIn: 'root'
  })
  export class HomeResultComponent implements OnInit {
    
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
  }