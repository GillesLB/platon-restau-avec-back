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
  loading = false;
  nombreCommentaire = 0;
  tableauNombreCommentaire: number[] = [];

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
            console.log('tl : ', this.listeRestaurants);
            // this.getCommentLength();
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

  getCommentLength() {
    for (const restaurant of this.listeRestaurants) {
      if (restaurant.commentaires_1) {
        this.nombreCommentaire++;
      }
      if (restaurant.commentaires_2) {
        this.nombreCommentaire++;
      }
      if (restaurant.commentaires_3) {
        this.nombreCommentaire++;
      }
      if (restaurant.commentaires_4) {
        this.nombreCommentaire++;
      }
      if (restaurant.commentaires_5) {
        this.nombreCommentaire++;
      }
      this.tableauNombreCommentaire.push(this.nombreCommentaire);
      this.nombreCommentaire = 0;
    }
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
