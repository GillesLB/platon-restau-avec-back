import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscriber} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ajouter-commentaire',
  templateUrl: './ajouter-commentaire.component.html',
  styleUrls: ['./ajouter-commentaire.component.css']
})
export class AjouterCommentaireComponent implements OnInit, OnDestroy {

  id: string;

  loading = false;

  subscriber = new Subscriber();

  ajouterCommentaireForm = new FormGroup({
    auteur: new FormControl('', Validators.required),
    commentaire: new FormControl('', Validators.required)
  });

  readonly url = 'http://localhost:3000/restau/';

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['restaurantId'];
  }

  envoyerCommentaire(): void {
    const auteur = this.ajouterCommentaireForm.get('auteur').value;
    const commentaire = this.ajouterCommentaireForm.get('commentaire').value;

    this.loading = true;

    this.subscriber.add(
      this.httpClient.post(
        this.url + `${this.id}/ajouter-commentaire`,
        {'auteur': auteur, 'commentaire': commentaire},
        {responseType: 'text'}
      ).subscribe(
        () => {
        },
        (error) => {
          console.log('Erreur submit : ', error);
          this.loading = false;
        },
        () => {
          this.loading = false;
          this.router.navigate(['liste']);
        }
      )
    );
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

}
