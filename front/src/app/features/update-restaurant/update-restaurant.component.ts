import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {Subscriber} from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  id: string;

  loading = false;

  subscriber = new Subscriber();

  restaurant;
  bonneDate;

  readonly url = 'http://localhost:3000/restau/';

  updateRestaurantForm = new FormGroup({
    nom: new FormControl(),
    adresse: new FormControl(),
    dateDerniereVisite: new FormControl(),
    latitude: new FormControl(),
    longitude: new FormControl(),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('restaurantId');
    this.getDataRestaurant();
  }

  getDataRestaurant(): void {
    this.loading = true;

    this.subscriber.add(
      this.httpClient.get(this.url + this.id + `/data-restaurant`)
      .subscribe(
        (getData) => {
          this.restaurant = getData[0];
          this.fillDataRestaurant();
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

  fillDataRestaurant() {
    this.bonneDate = moment(this.restaurant.date_visite).format('DD/MM/YYYY');

    this.updateRestaurantForm.patchValue({
      nom: this.restaurant.nom,
      adresse: this.restaurant.adresse,
      dateDerniereVisite: this.bonneDate,
      latitude: this.restaurant.latitude,
      longitude: this.restaurant.longitude
    });
  }

  onSubmit() {
    const nom = this.updateRestaurantForm.get(['nom']).value;
    const adresse = this.updateRestaurantForm.get(['adresse']).value;
    let dateDerniereVisite = this.updateRestaurantForm.get(['dateDerniereVisite']).value;
    const latitude = this.updateRestaurantForm.get(['latitude']).value;
    const longitude = this.updateRestaurantForm.get(['longitude']).value;
    const nb_visite = (dateDerniereVisite === this.bonneDate) ? this.restaurant.nb_visite : this.restaurant.nb_visite + 1;
    dateDerniereVisite = dateDerniereVisite.split('/').reverse().join('-');

    this.loading = true;

    this.subscriber.add(
      this.httpClient.put(
        this.url + `${this.id}/update-restaurant`,
        // tslint:disable-next-line:max-line-length
        {'nom': nom, 'adresse': adresse, 'dateDerniereVisite': dateDerniereVisite, 'latitude': latitude, 'longitude': longitude, 'nb_visite': nb_visite},
        {responseType: 'text'}
      ).subscribe(
        () => {
        },
        (error) => {
          console.log('Erreur submit : ', error);
          this.loading = false;
        },
        () => {
          this.loading = false;
          this.router.navigate(['liste', this.id]);
        }
      )
    );
  }

}
