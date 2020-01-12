import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserCart, CartItem } from "../models/cart";

@Injectable({ providedIn: "root" })
export class CartServices {
  public header: HttpHeaders;
  public userEndpoint: string = "http://localhost:4500/api/userCart/showCart/";
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({ "Content-Type": "application/json" });
  }

  CartDetails(item: UserCart) {
    return this.http.post(this.userEndpoint, JSON.stringify(item), {
      headers: this.header
    });
  }

  printThis(par: string) {
    console.log(par);
    if (localStorage.getItem("userCart")) {
      let cartData: UserCart = JSON.parse(localStorage.getItem("userCart"));
      let cartItems: CartItem[] = cartData.cartItems;
      let updatedCartItems: CartItem[] = [];
      let itemNotPresent: boolean = true;
      for (let x of cartItems) {
        if (x["prodId"] != par) updatedCartItems.push(x);
        else {
          updatedCartItems.push({
            prodId: par,
            quantity: x["quantity"] + 1
          });
          itemNotPresent = false;
        }
      }
      if (itemNotPresent)
        updatedCartItems.push({
          prodId: par,
          quantity: 1
        });
      cartData.cartItems = updatedCartItems;
      localStorage.setItem("userCart", JSON.stringify(cartData));
    } else {
      let cartData = {
        cartItems: [
          {
            prodId: par,
            quantity: 1
          }
        ]
      };
      localStorage.setItem("userCart", JSON.stringify(cartData));
    }
  }
}
