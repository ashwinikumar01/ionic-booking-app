import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {
  loadedPlaces: Place[];
  listedLoadedPlaces: Place[];
  private placesSub: Subscription;

  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.placesSub = this.placesService.places.subscribe((places) => {
      this.loadedPlaces = places;
      this.listedLoadedPlaces = this.loadedPlaces.slice(1);
    });
    console.log(this.loadedPlaces);
    this.listedLoadedPlaces = this.loadedPlaces.slice(1); //only for for virtual scroll
  }

  // onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
  //   console.log(event.detail, event);
  // }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  ngOnDestroy() {
    if (this.placesSub) {            // if placesSub is an object created then destroy it
      this.placesSub.unsubscribe();
    }
  }

  // onOpenMenu() {
  //   this.menuCtrl.toggle();
  // }
}
