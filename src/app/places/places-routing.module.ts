import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {
        path: 'discover',           // same as given in tab
        children: [
        {
          path: '',                  // reaching point
          loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
        },
        {
          path: ':placeId',
          loadChildren: () => import('./discover/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
        }
      ]
    },
      {
        path: 'offers',                 // same as given in tab
        children: [
        {
          path: '',                     // reaching point
          loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule)
        },
        {
          path: 'new',
          loadChildren: () => import('./offers/new-offer/new-offer.module').then( m => m.NewOfferPageModule)
        },
        {
          path: 'edit/:placeId',
          loadChildren: () => import('./offers/edit-offer/edit-offer.module').then( m => m.EditOfferPageModule)
        },
        {
          path: ':placeId',
          loadChildren: () => import('./offers/offer-bookings/offer-bookings.module').then( m => m.OfferBookingsPageModule)
        },
      ]
    },
       {
         path: '',
         redirectTo: '/places/tabs/discover',        // triggered when we'll go to => places/tabs
         pathMatch: 'full'
       }
    ]
  },
  {
    path: '',
    redirectTo: '/places/tabs/discover',           // triggered when we'll go to "/places" (connected to routing module second)
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
