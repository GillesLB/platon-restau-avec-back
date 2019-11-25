import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { Subscriber } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  detailRestaurant = true;
  commentaireEnvoye = false;
  noteEnvoyee = false;
  formulaireNote = false;
  formulaireComm = false;

  moyenne: number[] = [];
  noteMoyenne = 0;
  nombreCommentaire = 0;
  tableauNoteMoyenne: number[] = [];
  tableauCommentaires: string[] = [];
  tableauNombreCommentaire: number[] = [];

  loading = false;

  subscriber = new Subscriber();

  id: string;
  restaurant;

  readonly url = 'http://localhost:3000/restau/';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('restaurantId');
    this.getRestaurant();
  }

  getRestaurant() {
    this.loading = true;

    this.subscriber.add(
      this.httpClient.get(this.url + this.id)
        .subscribe(
          (restauData) => {
            this.restaurant = restauData[0];
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
      if (this.restaurant.notes_1) {
        this.moyenne.push(this.restaurant.notes_1);
      }
      if (this.restaurant.notes_2) {
        this.moyenne.push(this.restaurant.notes_2);
      }
      if (this.restaurant.notes_3) {
        this.moyenne.push(this.restaurant.notes_3);
      }
      if (this.restaurant.notes_4) {
        this.moyenne.push(this.restaurant.notes_4);
      }
      if (this.restaurant.notes_5) {
        this.moyenne.push(this.restaurant.notes_5);
      }
      this.noteMoyenne = this.moyenne.length > 0 ? Math.round((this.moyenne.reduce((a, b) => a + b, 0)) / this.moyenne.length) : 0;
      this.tableauNoteMoyenne.push(this.noteMoyenne);
  }

  getCommentLength() {
      if (this.restaurant.commentaires_1) {
        this.nombreCommentaire++;
        this.tableauCommentaires.push(this.restaurant.commentaires_1);
      }
      if (this.restaurant.commentaires_2) {
        this.nombreCommentaire++;
        this.tableauCommentaires.push(this.restaurant.commentaires_2);
      }
      if (this.restaurant.commentaires_3) {
        this.nombreCommentaire++;
        this.tableauCommentaires.push(this.restaurant.commentaires_3);
      }
      if (this.restaurant.commentaires_4) {
        this.nombreCommentaire++;
        this.tableauCommentaires.push(this.restaurant.commentaires_4);
      }
      if (this.restaurant.commentaires_5) {
        this.nombreCommentaire++;
        this.tableauCommentaires.push(this.restaurant.commentaires_5);
      }
  }

  ajouterNote() {
    this.router.navigate([`liste/${this.id}/ajouter-note`]);
  }

  cacherFiche() {
    this.detailRestaurant = false;
    this.formulaireNote = true;
  }

  montrerFiche() {
    this.detailRestaurant = true;
    this.formulaireNote = false;
  }

}
