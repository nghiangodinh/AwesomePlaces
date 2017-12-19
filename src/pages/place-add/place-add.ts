import { Component } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation";
import { ModalController } from "ionic-angular";
import { NgForm } from "@angular/forms";
import { LocationSetPage } from "../pages";
import { Location } from "../../models/location";

@Component({
  selector: "page-place-add",
  templateUrl: "place-add.html"
})
export class PlaceAddPage {
  location: Location = {
    lat: 40.7624324,
    lng: -73.9759827
  };
  locationIsSet = false;

  constructor(
    private modalCtrl: ModalController,
    private geolocation: Geolocation) {}

  onLocate() {
    this.geolocation.getCurrentPosition().then((location) => {
      this.location.lat = location.coords.latitude;
      this.location.lng = location.coords.longitude;
      this.locationIsSet = true;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  onOpenMap() {
    const modal = this.modalCtrl.create(LocationSetPage, {
      location: this.location,
      isSet: this.locationIsSet
    });
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        this.location = data.location;
        this.locationIsSet = true;
      }
    });
  }

  onTakePhoto() {}

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
