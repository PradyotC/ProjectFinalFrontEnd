import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({ providedIn: "root" })

export class ProductServices {
    public header:HttpHeaders;
    public userEndpoint:string = "http://localhost:4500/api/product/page/";
    constructor(private http: HttpClient) {
        this.header = new HttpHeaders({ "Content-Type": "application/json" });
    }
    Products(pageNumber:number){
        return this.http.get(this.userEndpoint+pageNumber+"/",{headers:this.header});
    }
}