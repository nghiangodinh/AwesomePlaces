import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { NavController, NavParams, ViewController } from "ionic-angular";

import { Location } from "../../models/location";

@Component({
  selector: "page-location-set",
  templateUrl: "location-set.html"
})
export class LocationSetPage implements OnInit {
  location: Location;
  marker: Location;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {}

  ngOnInit() {
    this.location = this.navParams.get("location");
    if (this.navParams.get("isSet")) {
      this.marker = this.location;
    }
  }

  onSetMarker(event: any) {
    this.marker = new Location(event.coords.lat, event.coords.lng);
  }

  onConfirm() {
    this.viewCtrl.dismiss({ location: this.marker });
  }

  onAbort() {
    this.viewCtrl.dismiss();
  }
}
