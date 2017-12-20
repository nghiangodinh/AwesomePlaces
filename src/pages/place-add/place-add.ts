import { PlaceService } from './../../services/place';
import { Component } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation";
import { Camera, CameraOptions } from "@ionic-native/camera";

import {
  ModalController,
  LoadingController,
  ToastController
} from "ionic-angular";
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
  imageUrl = "";

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private geolocation: Geolocation,
    private camera: Camera,
    private placeService: PlaceService
  ) {}

  onLocate() {
    const loader = this.loadingCtrl.create({
      content: "Getting your location..."
    });
    loader.present();

    this.geolocation
      .getCurrentPosition()
      .then(location => {
        loader.dismiss();
        this.location.lat = location.coords.latitude;
        this.location.lng = location.coords.longitude;
        this.locationIsSet = true;
      })
      .catch(error => {
        loader.dismiss();
        const toast = this.toastCtrl.create({
          message: "Could not get your location, please pick it manually!",
          duration: 2500
        });
        toast.present();
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

  onTakePhoto() {
    const options: CameraOptions = {
      quality: 100,
      correctOrientation: true,
      encodingType: this.camera.EncodingType.JPEG
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.imageUrl = imageData;
      },
      err => {
        console.log(err);
      }
    );
  }

  onSubmit(form: NgForm) {
    this.placeService.addPlace(form.value.title, form.value.description, this.location, this.imageUrl);

    // reset form & model
    form.reset();
    this.location = {
      lat: 40.7624324,
      lng: -73.9759827
    };
    this.locationIsSet = false;
    this.imageUrl = "";
  }
}
