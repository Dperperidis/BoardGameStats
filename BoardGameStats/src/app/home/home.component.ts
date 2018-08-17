import { Component, OnInit, TemplateRef, OnDestroy } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { AuthService } from "../_services/auth.service";
import { Router } from "../../../node_modules/@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  player: any = {};

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private authService: AuthService, private router: Router) {
    document.body.style.backgroundImage = "url(../../../assets/img/pic.jpg)";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "auto";
  }

  ngOnInit() {}

  ngOnDestroy() {
    document.body.style.backgroundImage = "";
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  login() {
    this.authService.login(this.player).subscribe(next => {
      this.router.navigate(["/home"]);
    });
  }
}
