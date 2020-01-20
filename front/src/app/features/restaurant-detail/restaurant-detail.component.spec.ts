import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailComponent } from './restaurant-detail.component';
import {MomentModule} from 'ngx-moment';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

describe('RestaurantDetailComponent', () => {
  let component: RestaurantDetailComponent;
  let fixture: ComponentFixture<RestaurantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RestaurantDetailComponent,
      ],
      imports: [
        MomentModule,
        RouterModule.forRoot([]),
        HttpClientModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show good date', () => {

  });
});
