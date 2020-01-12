import { Component, OnInit } from "@angular/core";
import { ProductServices } from "../../shared/services/product.services";
import { ActivatedRoute } from "@angular/router";
import { ProductDetailsServices } from '../../shared/services/productDetails.services';
import { CartServices } from '../../shared/services/cart.services';


@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  nameArray: string[] = [];
  totalProducts;
  pageSize;
  pagenumber;
  smallnumPages = 0;

  constructor(private productServices: ProductServices, private AR: ActivatedRoute,
     protected productDetailServices: ProductDetailsServices, protected cartServices: CartServices) { }

  ngOnInit() {
    this.AR.params.subscribe(data => this.pagenumber = data['id']);
    this.pagenumber = (!this.pagenumber) ? (1) : (this.pagenumber);
    this.productServices.Products(this.pagenumber).subscribe(data => {
      let y = data["result"];
      this.pageSize = data['pageSize'];

      this.totalProducts = data['totalProducts'];
      for (let x of y) {
        this.nameArray.push(x);
      }
    });
  }

  clickPrevious() {
    location.replace("http://localhost:4200/products/page/" + (--this.pagenumber));
  }

  clickNext() {
    location.replace("http://localhost:4200/products/page/" + (++this.pagenumber));
  }

}
