import { Injectable, OnInit } from '@angular/core';

import { Subscriber } from 'rxjs';

import { Restaurant } from 'src/app/core/restaurant';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  listeRestaurants;

  subscriber = new Subscriber();

  readonly url = 'http://localhost:3000/restau/';

  constructor(
    public httpClient: HttpClient,
  ) { }

  getRestaurants() {
    this.subscriber.add(
      this.httpClient.get(this.url)
        .subscribe(
          (restauListe) => {
            this.listeRestaurants = restauListe;
            console.log('liste : ', this.listeRestaurants);
          },
          (error) => {
            console.log('Erreur : ', error);
            // this.loading = false;
          },
          () => {
            // this.loading = false;
          }
        )
    );
  }

}
