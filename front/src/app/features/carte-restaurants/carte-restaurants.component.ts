import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

// librairie pour cartes interactives
import * as L from 'leaflet';
import {Subscriber} from 'rxjs';

@Component({
  selector: 'app-carte-restaurants',
  templateUrl: './carte-restaurants.component.html',
  styleUrls: ['./carte-restaurants.component.css']
})
export class CarteRestaurantsComponent implements OnInit, OnDestroy {

  loading = false;

  listeRestaurants;
  nombreRestaurants: number;

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
            this.nombreRestaurants = this.listeRestaurants.length;
          },
          (error) => {
            console.log('Erreur : ', error);
            this.loading = false;
          },
          () => {
            this.loading = false;
            this.initCard();
          }
        )
    );
  }

  initCard(): void {
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    const myplatonrestau = L.map('platonrestau').setView([47.207527, -1.546276], 16);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Platon Restau'
    }).addTo(myplatonrestau);

    const myIcon = L.icon({iconUrl: 'assets/images/marker-icon-laposte.png'});
    const myIconDefault = L.icon({iconUrl: 'assets/images/marker-icon-blue.png'});

    L.marker([47.207527, -1.546276], {icon: myIcon}).bindPopup('CSMSI - Atlantica').addTo(myplatonrestau).openPopup();
    this.bouclerRestaurants(myIconDefault, myplatonrestau);
  }

  bouclerRestaurants(myIcon, myplatonrestau): void {
    for (const restaurant of this.listeRestaurants) {
      L.marker([restaurant.latitude, restaurant.longitude], {icon: myIcon})
        .bindPopup(restaurant.nom).addTo(myplatonrestau);
    }
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
