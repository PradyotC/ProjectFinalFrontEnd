import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Register } from "../models/register";

@Injectable({ providedIn: "root" })

export class RegisterServices {
    public header: HttpHeaders;
    public userEndpoint: string = "http://localhost:4500/api/users/register/";
    constructor(private http: HttpClient) {
        this.header = new HttpHeaders({ "Content-Type": "application/json" });
    }
    UserRegister(item: Register) {
        return this.http.post(this.userEndpoint, JSON.stringify(item),
            {
                headers: this.header
            }
        );
    }
}
