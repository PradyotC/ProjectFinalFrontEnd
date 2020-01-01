import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { LoginServices } from "../../shared/services/login.services";
import { Dropdown } from "../../shared/models/dropdown";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  modalRef: BsModalRef;
  userLoginFlag: boolean;
  userName: string;
  logMessage: string;
  subListLogic:boolean=true;

  public items: string[] = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];

  public menuList:string[] = ["Electronics","TV and Appliances","Men","Women"];

  public electronicsList: Dropdown[] = [
    {
      categoryName: "Smartphones",
      subCategoryList: ["Redmi", "Apple", "Oppo", "Vivo", "Samsung"]
    },
    {
      categoryName: "Tablets",
      subCategoryList: ["Apple", "Microsoft", "Ikall", "Iball", "Honor"]
    },
    {
      categoryName: "Mobile",
      subCategoryList: ["Nokia", "Iball", "Micromax", "Panasonic"]
    },
    {
      categoryName: "Accessories",
      subCategoryList: ["Covers", "Cables", "Chargers", "Headphones"]
    }
  ];

  constructor(
    private loginServices: LoginServices,
    private modalService: BsModalService
  ) {
    let users: any = JSON.parse(localStorage.getItem("currentUser"));
    if (!localStorage.getItem("currentUser")) {
      this.userLoginFlag = true;
      this.logMessage = "Login";
      this.userName = "";
    } else {
      this.userLoginFlag = false;
      this.userName = "Hello " + users.firstName;
      this.logMessage = "Logout";
    }
    console.log(this.userName);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  Logout() {
    this.loginServices.UserLogout();
  }

  cartData(): string {
    if (!localStorage.getItem("userCart")) return "Cart is currently empty";
  }

  subListLogicInverter(){
    this.subListLogic= !this.subListLogic;
  }

  ngOnInit() {}
}
