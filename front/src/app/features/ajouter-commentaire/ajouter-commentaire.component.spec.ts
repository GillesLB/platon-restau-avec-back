import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCommentaireComponent } from './ajouter-commentaire.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

describe('AjouterCommentaireComponent', () => {
  let component: AjouterCommentaireComponent;
  let fixture: ComponentFixture<AjouterCommentaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AjouterCommentaireComponent,
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
    fixture = TestBed.createComponent(AjouterCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
