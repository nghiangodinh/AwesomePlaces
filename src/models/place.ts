import { Location } from "./location";

export class Place {
  constructor(
    public title: string,
    public description: string,
    location: Location,
    public imagePath: string
  ) {}
}
