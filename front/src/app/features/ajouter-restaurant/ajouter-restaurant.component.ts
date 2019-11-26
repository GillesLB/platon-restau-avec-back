import {Component, Injectable, OnDestroy} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

import {switchMap} from 'rxjs/operators';
import { Subscriber} from 'rxjs';
import * as moment from 'moment';

@Injectable()

@Component({
  selector: 'app-ajouter-restaurant',
  templateUrl: './ajouter-restaurant.component.html',
  styleUrls: ['./ajouter-restaurant.component.css']
})
export class AjouterRestaurantComponent implements OnDestroy {

  NOM_REGEX = '^[a-zA-Z0-9_]+$';
  ADRESSE_REGEX = '^[a-zA-Z0-9_\\s]+$';
  NOMBRE_REGEX = '^[0-9,.-]+$';

  listeNotes = ['', '1', '2', '3', '4', '5'];

  ajouterRestaurantForm = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.pattern(this.NOM_REGEX)]),
    adresse: new FormControl('', [Validators.required, Validators.pattern(this.ADRESSE_REGEX)]),
    dateDerniereVisite: new FormControl('', [Validators.required]),
    latitude: new FormControl('', [Validators.required, Validators.pattern(this.NOMBRE_REGEX)]),
    longitude: new FormControl('', [Validators.required, Validators.pattern(this.NOMBRE_REGEX)]),
    note: new FormControl('', Validators.required),
  });

  loading = false;
  note: number;

  readonly url = 'http://localhost:3000/restau/';

  subscriber = new Subscriber();

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  envoyerFormulaire() {
    this.loading = true;

    const nom = this.ajouterRestaurantForm.get('nom').value;
    const adresse = this.ajouterRestaurantForm.get('adresse').value;
    let dateDerniereVisite = this.ajouterRestaurantForm.get('dateDerniereVisite').value;
    dateDerniereVisite = moment(dateDerniereVisite).format('YYYY-MM-DD');
    this.note = this.ajouterRestaurantForm.get('note').value;
    const nb_visite = 1;
    const latitude = this.ajouterRestaurantForm.get('latitude').value;
    const longitude = this.ajouterRestaurantForm.get('longitude').value;

    this.subscriber.add(
      this.httpClient.post(
        this.url + `ajouter-restaurant`,
        // tslint:disable-next-line:max-line-length
        {'nom': nom, 'adresse': adresse, 'latitude': latitude, 'longitude': longitude, 'nb_visite': nb_visite, 'date_visite': dateDerniereVisite},
        {responseType: 'text'}
      )
        .subscribe(
        () => {
        },
        (error) => {
          console.log('Erreur submit restaurant : ', error);
          this.loading = false;
        },
        () => {
          this.postNote();
        }
      )
    );
  }

  postNote() {
   this.httpClient.get(this.url + `all`).pipe(
     switchMap( (truc) => {
        const id_restau = truc[(truc.length) - 1].id;
      return this.httpClient.post(
      this.url + `ajouter-note`,
      {'id_restau': id_restau, 'note': this.note},
      {responseType: 'text'}
      );
    })
  ).subscribe(
     () => {
     },
     (error) => {
       console.log('Erreur submit note : ', error);
       this.loading = false;
     },
     () => {
       this.loading = false;
       this.router.navigate(['liste']);
     }
    );
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
