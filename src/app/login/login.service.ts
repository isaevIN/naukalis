import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { User } from "./user";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class LoginClass{
    private urlBase = environment.apiBaseUrl;
    
    constructor(private http: HttpClient) { }

    public getAllUser() : Observable<User[]>{
        return this.http.get<User[]>(`${this.urlBase}/login`);
    }

}