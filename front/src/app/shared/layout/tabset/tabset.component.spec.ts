import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsetComponent } from './tabset.component';
import {RouterModule} from '@angular/router';

describe('TabsetComponent', () => {
  let component: TabsetComponent;
  let fixture: ComponentFixture<TabsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TabsetComponent,
      ],
      imports: [
        RouterModule.forRoot([]),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
