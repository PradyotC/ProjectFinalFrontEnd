import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Login } from "../models/login";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class LoginServices {
  public header: HttpHeaders;
  public userEndpoint: string = "http://localhost:4500/api/users/login/auth/";
  public userLogged: string = "http://localhost:4500/api/users/login/me/";

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({ "Content-Type": "application/json" });
  }
  
  UserLogin(item: Login): Observable<any> {
    return this.http
      .post<any>(this.userEndpoint, JSON.stringify(item), {
        headers: this.header
      })
      .pipe(
        map(item => {
          if (item && item.token) {
            localStorage.setItem("currentUserToken", JSON.stringify(item));
            return item;
          }
          return item;
        })
      );
  }

  UserLogout() {
    localStorage.removeItem("currentUserToken");
    localStorage.removeItem("currentUser");
    location.reload();
  }

  userLoggedin() {
    let token = JSON.parse(localStorage.getItem("currentUserToken"));
    let k = token.token;
    this.header = new HttpHeaders({
      "Content-Type": "application/json",
      "x-auth-token": k
    });
    return this.http.get(this.userLogged, { headers: this.header });
  }
}
