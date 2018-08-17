import { environment } from "../../environments/environment";
import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
  })
  export class PlayerService {
    baseUrl = environment.apiUrl;

    constructor() {}
  }
