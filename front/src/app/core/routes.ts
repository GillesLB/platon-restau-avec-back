import { Routes } from '@angular/router';

import { PageAccueilComponent } from 'src/app/features/page-accueil/page-accueil.component';
import { ListeRestaurantsComponent } from 'src/app/features/liste-restaurants/liste-restaurants.component';
import { RestaurantDetailComponent } from 'src/app/features/restaurant-detail/restaurant-detail.component';
import { AjouterRestaurantComponent } from 'src/app/features/ajouter-restaurant/ajouter-restaurant.component';
import { PageNotFoundComponent } from 'src/app/features/page-not-found/page-not-found.component';
import { CarteRestaurantsComponent } from 'src/app/features/carte-restaurants/carte-restaurants.component';
import {AjouterNoteComponent} from '../features/ajouter-note/ajouter-note.component';
import {UpdateRestaurantComponent} from '../features/update-restaurant/update-restaurant.component';
import {AjouterCommentaireComponent} from '../features/ajouter-commentaire/ajouter-commentaire.component';
import { StatRestaurantComponent } from '../features/stat-restaurant/stat-restaurant.component';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: 'accueil', component: PageAccueilComponent },
  { path: 'liste', component: ListeRestaurantsComponent },
  { path: 'liste/:restaurantId', component: RestaurantDetailComponent },
  { path: 'liste/:restaurantId/ajouter-note', component: AjouterNoteComponent },
  { path: 'liste/:restaurantId/ajouter-commentaire', component: AjouterCommentaireComponent },
  { path: 'ajouter-restaurant', component: AjouterRestaurantComponent },
  { path: 'liste/:restaurantId/update-restaurant', component: UpdateRestaurantComponent },
  { path: 'carte-restaurants', component: CarteRestaurantsComponent },
  { path: 'stat-restaurants', component: StatRestaurantComponent },
  { path: '**', component: PageNotFoundComponent }
];
