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
  moyenne: number[] = [];
  noteMoyenne = 0;
  nombreCommentaire = 0;
  tableauNoteMoyenne: number[] = [];
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
            this.getNoteLength();
            this.getCommentLength();
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

  getNoteLength() {
    for (const restaurant of this.listeRestaurants) {
      if (restaurant.notes_1) {
        this.moyenne.push(restaurant.notes_1);
      }
      if (restaurant.notes_2) {
        this.moyenne.push(restaurant.notes_2);
      }
      if (restaurant.notes_3) {
        this.moyenne.push(restaurant.notes_3);
      }
      if (restaurant.notes_4) {
        this.moyenne.push(restaurant.notes_4);
      }
      if (restaurant.notes_5) {
        this.moyenne.push(restaurant.notes_5);
      }
      this.noteMoyenne = this.moyenne.length > 0 ? Math.round((this.moyenne.reduce((a, b) => a + b, 0)) / this.moyenne.length) : 0;
      this.tableauNoteMoyenne.push(this.noteMoyenne);
      this.moyenne = [];
      this.noteMoyenne = 0;
    }
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
