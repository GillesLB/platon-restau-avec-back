import { Component, OnInit, OnDestroy } from '@angular/core';


import {Subscriber} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-liste-restaurants',
  templateUrl: './liste-restaurants.component.html',
  styleUrls: ['./liste-restaurants.component.css']
})
export class ListeRestaurantsComponent implements OnInit, OnDestroy {

  page = 1;
  pageSize = 7;

  listeRestaurants;

  loading = false;

  subscriber = new Subscriber();

  readonly url = 'http://localhost:3000/restau/';

  constructor(
    public httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.loading = true;

    this.subscriber.add(
      this.httpClient.get(this.url)
        .subscribe(
          (restauListe) => {
            this.listeRestaurants = restauListe;
            console.log(this.listeRestaurants);
          },
          (error) => {
            console.log('Erreur : ', error);
            this.loading = false;
          },
          () => {
            this.loading = false;
          }
        )
    );
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
