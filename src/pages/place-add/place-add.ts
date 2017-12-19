import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { NgForm } from "@angular/forms";

@Component({
  selector: "page-place-add",
  templateUrl: "place-add.html"
})
export class PlaceAddPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  onLocated() {}

  onOpenMap() {}

  onTakePhoto() {}

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
