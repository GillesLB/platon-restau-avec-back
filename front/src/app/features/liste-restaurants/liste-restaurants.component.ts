import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

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

  loading = false;

  subscriber = new Subscriber();

  readonly url = 'http://localhost:3000/restau/';

  constructor(
    public httpClient: HttpClient,
    private router: Router,
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

  onDelete(restaurant): void {
    this.loading = false;

    this.subscriber.add(
      this.httpClient.delete(this.url + restaurant.id)
        .subscribe(
          () => {
          },
          (error) => {
            console.log('Erreur : ', error);
            this.loading = false;
          },
          () => {
            this.loading = false;
            this.router.navigate(['/']);
          }
        )
    );
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
