import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {forkJoin, Subscriber} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit, OnDestroy {

  detailRestaurant = true;
  commentaireEnvoye = false;
  noteEnvoyee = false;
  formulaireNote = false;
  formulaireComm = false;

  nombreCommentaire = 0;

  loading = false;

  subscriber = new Subscriber();

  id: string;
  restaurant;
  commentaires;

  readonly url = 'http://localhost:3000/restau/';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('restaurantId');
    this.getDataRestaurant();
  }

  getDataRestaurant(): void {
    this.loading = true;

    this.subscriber.add(
      forkJoin({
        getData: this.httpClient.get(this.url),
        getComments: this.httpClient.get(this.url + this.id)
      })
        .subscribe(
          ({getData, getComments}) => {
            this.restaurant = getData[+(this.id) - 1];
            this.commentaires = getComments;
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

  ajouterNote(): void {
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

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
