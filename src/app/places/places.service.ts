import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      'assets/images/manhattan.jpg',
      149.99,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    ),
    new Place(
      'p2',
      "L'Amour Toujours",
      'A romantic place in Paris!',
      'assets/images/paris.jpg',
      189.99,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'assets/images/fog.jpg',
      99.99,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    ),
  ];

  get places() {
    return [...this._places];         // getting all places
  }

  constructor() {}

  getPlace(id: string) {
    return { ...this.places.find((p) => p.id === id) }; // getting a single place through p object => p.id
  }
}
