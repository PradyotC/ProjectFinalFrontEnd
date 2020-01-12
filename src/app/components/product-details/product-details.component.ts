import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductDetailsServices } from '../../shared/services/productDetails.services';
import { CartServices } from '../../shared/services/cart.services';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productData: any;

  constructor(protected productDetailServices:ProductDetailsServices, private AR: ActivatedRoute, protected cartServices: CartServices) { }

  ngOnInit() {
    this.AR.params.subscribe(data => 
      this.productDetailServices.ProductDetails(data['id']).subscribe(data => this.productData = data['result'])
    );
  }
}
