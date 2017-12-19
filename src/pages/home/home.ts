import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { PlaceAddPage } from "../pages";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  placeAddPage = PlaceAddPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
