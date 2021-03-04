import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit, OnDestroy {
  place: Place;
  form: FormGroup;
  private placeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
      }
      this.placeSub = this.placesService
        .getPlace(paramMap.get('placeId')) // async
        .subscribe((place) => {
          this.place = place;

          this.form = new FormGroup({
            // need to place key of form-control
            title: new FormControl(this.place.title, {
              updateOn: 'change',
              validators: [Validators.required],
            }),
            description: new FormControl(this.place.description, {
              updateOn: 'change',
              validators: [Validators.required, Validators.maxLength(180)],
            }),
          });
        });
    });
  }

  ngOnDestroy() {
    if (this.placeSub) {
      this.placeSub.unsubscribe();
    }
  }

  //method
  onUpdateOffer() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form);
  }
}
