import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {Subscriber} from 'rxjs';

import { Note } from 'src/app/core/note';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ajouter-note',
  templateUrl: './ajouter-note.component.html',
  styleUrls: ['./ajouter-note.component.css']
})
export class AjouterNoteComponent implements OnInit, OnDestroy {

  noteForm = new FormGroup({
    note: new FormControl('', Validators.required)
  });

  id: string;

  subscriber = new Subscriber();

  public notes: Note[] = [
    {'avis': '😒 Beurk : ', 'note': 1},
    {'avis': '🤨 Bof : ', 'note': 2},
    {'avis': '🙂 Correct : ', 'note': 3},
    {'avis': '😋 Bien : ', 'note': 4},
    {'avis': '😍 Extra : ', 'note': 5}
  ];

  readonly url = 'http://localhost:3000/restau/';

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['restaurantId'];
  }

  envoyerNote() {
    const nouvelleNote = this.noteForm.get('note').value;

    this.subscriber.add(
      this.httpClient.post(
        this.url + `${this.id}/ajouter-note`,
        {'note': parseInt(nouvelleNote, 10)},
        {responseType: 'text'}
      ).subscribe(
        () => {
        },
        (error) => {
          console.log('Erreur submit : ', error);
          // this.loading = false;
        },
        () => {
          // this.loading = false;
          this.router.navigate(['liste']);
        }
      )
    );
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

}
