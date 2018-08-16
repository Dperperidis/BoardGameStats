import { Component, OnInit, TemplateRef, OnDestroy } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {
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
}
