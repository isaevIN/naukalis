import { Injectable } from "@angular/core";
@Injectable({providedIn: 'root'})
export class Server{
    getUrlServerApi(): string{
        return "http://localhost:8080/login";
    }
}