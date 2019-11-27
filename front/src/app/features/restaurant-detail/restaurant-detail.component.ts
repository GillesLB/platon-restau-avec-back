import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {forkJoin, Subscriber} from 'rxjs';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit, OnDestroy {

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
        getData: this.httpClient.get(this.url + this.id + `/data-restaurant`),
        getComments: this.httpClient.get(this.url + this.id + `/commentaires`)
      })
        .subscribe(
          ({getData, getComments}) => {
            this.restaurant = getData[0];
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

  ajouterCommentaire(): void {
    this.router.navigate([`liste/${this.id}/ajouter-commentaire`]);
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
