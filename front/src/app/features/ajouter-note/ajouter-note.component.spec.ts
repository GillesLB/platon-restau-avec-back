import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterNoteComponent } from './ajouter-note.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

describe('AjouterNoteComponent', () => {
  let component: AjouterNoteComponent;
  let fixture: ComponentFixture<AjouterNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AjouterNoteComponent
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
    fixture = TestBed.createComponent(AjouterNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
