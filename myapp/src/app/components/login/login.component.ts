import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Regx } from "./regx";
import { Login } from "../../shared/models/login";
import { LoginServices } from "../../shared/services/login.services";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public userForm: FormGroup;
  public submitted: boolean = false;
  constructor(private fb: FormBuilder, private loginServices: LoginServices) {}

  public Save(data: Login) {
    this.submitted = true;
    if (!this.userForm.valid) {
      return;
    }
    this.loginServices.UserLogin(data).subscribe(data => {
      this.loginServices.userLoggedin().subscribe(data => {
        localStorage.setItem("currentUser", JSON.stringify(data));
        alert("Login Successfull");
        location.replace('http://localhost:4200/');
      });
    });
  }

  ngOnInit() {
    
    if(localStorage.getItem('currentUser'))
    {
      location.replace('http://localhost:4200/');
    }
  
    this.userForm = this.fb.group({
      UserLogin: this.fb.group({
        userEmail: ["", [Validators.required, Regx.Email]],
        userPassword: ["", [Validators.required, Regx.Password]]
      })
    });
  }
}
