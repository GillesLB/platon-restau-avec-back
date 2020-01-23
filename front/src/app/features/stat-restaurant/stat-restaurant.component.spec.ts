import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatRestaurantComponent } from './stat-restaurant.component';

describe('StatRestaurantComponent', () => {
  let component: StatRestaurantComponent;
  let fixture: ComponentFixture<StatRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
