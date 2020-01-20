import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestaurantComponent } from './update-restaurant.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

describe('UpdateRestaurantComponent', () => {
  let component: UpdateRestaurantComponent;
  let fixture: ComponentFixture<UpdateRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UpdateRestaurantComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        HttpClientModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
