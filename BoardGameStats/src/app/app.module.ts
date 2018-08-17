import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap";
import { BsDatepickerModule } from "ngx-bootstrap";

import { AppComponent } from "./app.component";
import { routes } from "./routes";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main/main.component";
import { RegisterComponent } from "./register/register.component";
import { ToastModule } from "toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from "./_services/auth.service";
import { PlayerService } from "./_services/player.service";
import { JwtModule } from "../../node_modules/@auth0/angular-jwt";
import { HttpClientModule } from "../../node_modules/@angular/common/http";

// export function tokenGetter() {
//   return localStorage.getItem("token");
// }

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MainComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: tokenGetter,
    //     whitelistedDomains: ["localhost:61646"],
    //     blacklistedRoutes: ["localhost:61646/api/auth"]
    //   }
    // })
  ],
  providers: [
    AuthService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
