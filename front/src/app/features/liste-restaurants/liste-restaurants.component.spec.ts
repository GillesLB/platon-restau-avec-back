import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRestaurantsComponent } from './liste-restaurants.component';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MomentModule} from 'ngx-moment';
import {HttpClientModule} from '@angular/common/http';
import { By } from '@angular/platform-browser';

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
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the good date', () => {
    const newDate = fixture.debugElement.query(By.css('.text-center'));
    console.log('t : ', newDate);
    fixture.detectChanges();
    expect(component.listeRestaurants.date_visite.trim()).toBe('20-01-2020');
  });
});
