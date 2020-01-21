import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRestaurantsComponent } from './liste-restaurants.component';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MomentModule} from 'ngx-moment';
import {HttpClientModule} from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('ListeRestaurantsComponent', () => {
  let component: ListeRestaurantsComponent;
  let fixture: ComponentFixture<ListeRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListeRestaurantsComponent,
      ],
      imports: [
        RouterModule.forRoot([]),
        HttpClientModule,
        NgbModule,
        MomentModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRestaurantsComponent);
    component = fixture.componentInstance;
    component.listeRestaurants = {
      date_visite: '2020-01-20',
      nb_visite: 3,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain date', () => {
    expect(component.listeRestaurants.date_visite).toContain('2020-01-20');
  });

  it('should be greater than 2', () => {
    expect(component.listeRestaurants.nb_visite).toBeGreaterThan(2);
  });

  it('should focus on a restaurant', () => {
    const restaurant = {nom: 'Truc'};
    component.onFocus(restaurant);
    spyOn(component, 'onFocus').and.returnValue(of(restaurant.nom))
    expect(component.selectedRestaurant['nom']).toEqual('Truc');
  });

  // it('should show the good date', () => {
  //   fixture.detectChanges();
  //   const subscriptionName = fixture.nativeElement.querySelector('.bla').textContent;
  //   expect(subscriptionName).toContain('20-01-2020');
  // });
});
