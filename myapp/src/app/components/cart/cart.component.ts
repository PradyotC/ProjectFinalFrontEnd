import { Component, OnInit } from '@angular/core';
import { CartServices } from "../../shared/services/cart.services";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  userCartData;
  userCartTotal: number;
  protected userCartCheck: boolean = !!localStorage.getItem('userCart');
  protected userCheck: boolean = !localStorage.getItem('currentUser');

  constructor(private cartServices: CartServices) { }

  ngOnInit() {
    if (this.userCartCheck)
      this.cartData();
  }

  cartData() {
    this.cartServices
      .CartDetails(JSON.parse(localStorage.getItem("userCart")))
      .subscribe(data => {
        this.userCartData = data['cartItems'];
        this.userCartTotal = data['totalPrice'].toFixed(2);
      });
  }

}
