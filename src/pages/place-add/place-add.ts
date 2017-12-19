import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";
import { NgForm } from "@angular/forms";
import { LocationSetPage } from "../pages";

@Component({
  selector: "page-place-add",
  templateUrl: "place-add.html"
})
export class PlaceAddPage {
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private modalCtrl: ModalController) {}

  onLocated() {}

  onOpenMap() {
    const modal = this.modalCtrl.create(LocationSetPage);
    modal.present();
  }

  onTakePhoto() {}

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
