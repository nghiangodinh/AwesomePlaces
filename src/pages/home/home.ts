import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { PlaceAddPage, PlacePage } from "../pages";
import { Place } from "../../models/place";
import { PlaceService } from "../../services/place";
import { ModalController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  placeAddPage = PlaceAddPage;
  places: Place[];

  constructor(
    private modalCtrl: ModalController,
    private placeService: PlaceService
  ) {}

  ionViewWillEnter() {
    this.places = this.placeService.loadPlaces();
  }

  onOpenPlace(place: Place, index: number) {
    this.modalCtrl.create(PlacePage, { place: place, index: index });
    this.modalCtrl.present();
  }
}
