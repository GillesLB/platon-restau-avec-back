import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Subscriber} from 'rxjs';

@Component({
  selector: 'app-liste-restaurants',
  templateUrl: './liste-restaurants.component.html',
  styleUrls: ['./liste-restaurants.component.css']
})
export class ListeRestaurantsComponent implements OnInit, OnDestroy {

  page = 1;
  pageSize = 7;

  listeRestaurants;
  errors;

  loading = false;
  selectedRestaurant = {};

  private subscriber = new Subscriber();

  readonly url = 'http://localhost:3000/restau/';

  constructor(
    public httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getRestaurants();
  }

  private getRestaurants(): void {
    this.loading = true;

    this.subscriber.add(
      this.httpClient.get(this.url)
        .subscribe(
          (restauListe) => {
            this.listeRestaurants = restauListe;
          },
          (error) => {
            this.errors = error;
            this.loading = false;
          },
          () => {
            this.loading = false;
          }
        )
    );
  }

  onFocus(restaurant): void {
    this.selectedRestaurant = restaurant;
  }

  onDelete(restaurant): void {
    this.loading = false;

    this.subscriber.add(
      this.httpClient.delete(this.url + restaurant.id)
        .subscribe(
          () => {
          },
          (error) => {
            this.errors = error;
            this.loading = false;
          },
          () => {
            this.loading = false;
            window.location.reload();
            // this.router.navigate(['/']);
          }
        )
    );
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
