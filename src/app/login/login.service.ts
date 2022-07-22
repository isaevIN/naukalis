import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../_services/interfaces/user-intf";

@Injectable({
    providedIn: 'root'
})
export class LoginClass{
    private urlBase = environment.apiBaseUrl;
    private token = '';
    
    constructor(private http: HttpClient) { }

    public getAllUser() : Observable<User[]>{
        return this.http.get<User[]>(`${this.urlBase}/login`);
    }

    public getLogin(login:string, password:string): Observable<{token: string}>{
        return this.http.get<{token: string}>(`${this.urlBase}/login/check?login=${login}&password=${password}`)
            .pipe(
                tap(
                    ({token})=>{
                        localStorage.setItem('auth-token', token)
                        this.setToken(token)
                    }
                ),
                catchError(err=> {
                    this.logout();
                    console.log(err);
                    throw err;
                 })
            )     
    }

    public setToken(token:string){
        this.token = token;
    }

    public getToken(): string{
        return this.token;
    }

    public isLogin(): boolean {
        return !!this.token
    }

    public logout(): void{
        this.setToken('');
        localStorage.clear();
    }

}