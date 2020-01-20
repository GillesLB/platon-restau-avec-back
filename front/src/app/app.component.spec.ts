import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HeaderComponent} from './shared/layout/header/header.component';
import {TabsetComponent} from './shared/layout/tabset/tabset.component';
import {FooterComponent} from './shared/layout/footer/footer.component';
import {RouterModule} from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        TabsetComponent,
      ],
      imports: [
        RouterModule.forRoot([])
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
