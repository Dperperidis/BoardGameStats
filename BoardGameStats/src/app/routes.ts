import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main/main.component";
import { RegisterComponent } from "./register/register.component";

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "main", component: MainComponent },
    { path: "register", component: RegisterComponent }
];
