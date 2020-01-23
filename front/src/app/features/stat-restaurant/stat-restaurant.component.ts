import { Component, OnInit } from '@angular/core';
import { combineLatest, forkJoin, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { log } from 'util';

@Component({
  selector: 'app-stat-restaurant',
  templateUrl: './stat-restaurant.component.html',
  styleUrls: ['./stat-restaurant.component.css']
})
export class StatRestaurantComponent implements OnInit {

  chart = {};
  chart2 = {};
  loading = false;
  chartData = [];
  chartData2 = [];

  errors;
  listeRestaurants;
  listeCommentaires;

  readonly url = 'http://localhost:3000/restau/';

  private subscriber = new Subscriber();

  constructor(
    public httpClient: HttpClient,
  ) { }

  ngOnInit() {
    this.getRestaurants();
    this.chart = {
      title: 'Test de graph\'',
      type: 'Bar',
      data: this.chartData,
      columnNames: ['Restaurants visités lors des cérémonies', 'Nombre de visite'],
      width: 1200,
      height: 300,
      options: {
        colors: null,
      },
    };
    this.chart2 = {
      type: 'BarChart',
      data: this.chartData2,
      columnNames: ['Restaurants visités lors des cérémonies', 'Note moyenne (sur 5)'],
      width: 600,
      height: 400,
      options: {
        colors: ['#555'],
      },
    };
  }

  private getRestaurants(): void {
    this.loading = true;

    this.subscriber.add(
      forkJoin({
        restauListe: this.httpClient.get(this.url),
        commentListe: this.httpClient.get(this.url + `commentaires`)
      })
        .subscribe(
          ({restauListe, commentListe}) => {
            this.listeRestaurants = restauListe;
            this.listeCommentaires = commentListe;
            for (const rest of this.listeRestaurants) {
              this.chartData.push([rest.nom, rest.nb_visite]);
              this.chartData2.push([rest.nom, rest.note_moyenne]);
            }
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

}
