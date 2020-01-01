import { Component, OnInit, EventEmitter } from "@angular/core";
import { PageChangedEvent } from "ngx-bootstrap/pagination";
import { ProductServices } from "../../shared/services/product.services";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  //rotate = true;
  //maxSize = 5;
  //status = "ON";
  nameArray:string[]=[];
  //perPage;
  totalProducts;
  pageSize;
  pagenumber;
  smallnumPages = 0;

  constructor(private productServices: ProductServices,private AR:ActivatedRoute) {}
/* 
  loadData(pageNumber:number){
    this.productServices.Products(pageNumber).subscribe(data => {
      let y  = data["result"];
      this.nameArray = [];
      for (let x of y)
        this.nameArray.push(x["name"]);
    });
  } */

  ngOnInit() {
    this.AR.params.subscribe(data=>this.pagenumber=data['id']);
    this.pagenumber = (!this.pagenumber)?(1):(this.pagenumber);
    this.productServices.Products(this.pagenumber).subscribe(data => {
      let y  = data["result"];
      //this.nameArray = [];
      this.pageSize = data['pageSize'];
      this.totalProducts = data['totalProducts'];
      for (let x of y)
        this.nameArray.push(x["name"]);
    });
  }

  clickPrevious()
  {
    location.replace("http://localhost:4200/products/page/"+(--this.pagenumber));
  }

  clickNext()
  {
    location.replace("http://localhost:4200/products/page/"+(++this.pagenumber));
  }

  /* pageChanged(event: PageChangedEvent): void {
    console.log(event.itemsPerPage);
    this.loadData(event.page);
  } */
}
