import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxPaginationModule } from 'ngx-pagination';

import { routes } from 'src/app/core/routes';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/shared/layout/header/header.component';
import { FooterComponent } from 'src/app/shared/layout/footer/footer.component';
import { ListeRestaurantsComponent } from 'src/app/features/liste-restaurants/liste-restaurants.component';
import { PageNotFoundComponent } from 'src/app/features/page-not-found/page-not-found.component';
import { RestaurantDetailComponent } from './features/restaurant-detail/restaurant-detail.component';
import { AjouterRestaurantComponent } from './features/ajouter-restaurant/ajouter-restaurant.component';
import { SupprimerRestaurantComponent } from './features/supprimer-restaurant/supprimer-restaurant.component';
// import { AjouterNoteComponent } from './shared/layout/ajouter-note/ajouter-note.component';
import { AjouterNoteComponent } from './features/ajouter-note/ajouter-note.component';
import { AjouterCommentaireComponent } from './shared/layout/ajouter-commentaire/ajouter-commentaire.component';
import { PageAccueilComponent } from './features/page-accueil/page-accueil.component';
import { environment } from 'src/environments/environment.prod';
import { MomentModule } from 'ngx-moment';
import { TabsetComponent } from './shared/layout/tabset/tabset.component';
import { CarteRestaurantsComponent } from './features/carte-restaurants/carte-restaurants.component';
import { RestaurantsService } from 'src/app/features/services/restaurants.service';
import { UpdateRestaurantComponent } from './features/update-restaurant/update-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListeRestaurantsComponent,
    PageNotFoundComponent,
    RestaurantDetailComponent,
    AjouterRestaurantComponent,
    SupprimerRestaurantComponent,
    AjouterNoteComponent,
    AjouterCommentaireComponent,
    PageAccueilComponent,
    TabsetComponent,
    CarteRestaurantsComponent,
    UpdateRestaurantComponent,
  ],
  exports: [
    RouterModule
  ],
  imports: [
    NgbModule,
    BrowserModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes),
    // tslint:disable-next-line: deprecation
    HttpModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    })
  ],
  providers: [
    RestaurantDetailComponent,
    RestaurantsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
