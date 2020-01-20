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
import { AjouterNoteComponent } from './features/ajouter-note/ajouter-note.component';
import { PageAccueilComponent } from './features/page-accueil/page-accueil.component';
import { MomentModule } from 'ngx-moment';
import { TabsetComponent } from './shared/layout/tabset/tabset.component';
import { CarteRestaurantsComponent } from './features/carte-restaurants/carte-restaurants.component';
import { UpdateRestaurantComponent } from './features/update-restaurant/update-restaurant.component';
import { AjouterCommentaireComponent } from './features/ajouter-commentaire/ajouter-commentaire.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListeRestaurantsComponent,
    PageNotFoundComponent,
    RestaurantDetailComponent,
    AjouterRestaurantComponent,
    AjouterNoteComponent,
    AjouterCommentaireComponent,
    PageAccueilComponent,
    TabsetComponent,
    CarteRestaurantsComponent,
    UpdateRestaurantComponent,
  ],
  exports: [
    RouterModule,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
