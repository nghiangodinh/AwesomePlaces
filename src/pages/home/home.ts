import { Component, OnInit } from "@angular/core";
import { ModalController } from "ionic-angular";
import { PlaceAddPage, PlacePage } from "../pages";
import { Place } from "../../models/place";
import { PlaceService } from "../../services/place";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  placeAddPage = PlaceAddPage;
  places: Place[];

  constructor(
    private modalCtrl: ModalController,
    private placeService: PlaceService
  ) {}

  ngOnInit() {
    this.placeService
      .fetchPlaces()
      .then((places: Place[]) => (this.places = places));
  }

  ionViewWillEnter() {
    this.places = this.placeService.loadPlaces();
  }

  onOpenPlace(place: Place, index: number) {
    const placeModal = this.modalCtrl.create(PlacePage, { place: place, index: index });
    placeModal.present();
  }
}
