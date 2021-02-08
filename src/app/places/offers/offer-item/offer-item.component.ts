import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../place.model';

@Component({
  selector: 'offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
})
export class OfferItemComponent implements OnInit {

  @Input() offer: Place;           // taking data from offers.page.html & providing Input therefore

  constructor() { }

  ngOnInit() {}

  getDummyDate() {
    return new Date();
  }

}
