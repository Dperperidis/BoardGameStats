import { environment } from "../../environments/environment";
import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "@angular/common/http";
import { Player } from "../_models/player";
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  baseUrl = environment.apiUrl + "auth/";

  decodedToken: any;
  jwtHelper = new JwtHelperService();
  currentPlayer: Player;

  constructor(private http: HttpClient) {}



  login(model: any) {
    return this.http
    .post(this.baseUrl + "login", model)
    .pipe(
      map((response: any) => {
        const player = response;
        if (player) {
          localStorage.setItem("token", player.token);
          localStorage.setItem("player", JSON.stringify(player.player));
          this.decodedToken = this.jwtHelper.decodeToken(player.token);
          console.log(this.decodedToken);
          this.currentPlayer = player.player;
        }
      })
    );
  }

  // login(player: Player) {
  //   return this.http.post(this.baseUrl + "login", player);
  // }


  register(player: Player) {
    return this.http.post(this.baseUrl + "register", player);
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !this.jwtHelper.isTokenExpired(token);
  }
}
