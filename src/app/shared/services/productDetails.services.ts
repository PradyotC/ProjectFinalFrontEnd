import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserCart, CartItem } from '../models/cart';

@Injectable({ providedIn: "root" })
export class ProductDetailsServices {
  public header: HttpHeaders;
  public userEndpoint: string =
    "http://localhost:4500/api/product/findProduct/";
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({ "Content-Type": "application/json" });
  }
  ProductDetails(prodId: number) {
    return this.http.get(this.userEndpoint + prodId + "/", {
      headers: this.header
    });
  }

  isUser(): boolean {
    return !localStorage.getItem("currentUser");
  }  

}
