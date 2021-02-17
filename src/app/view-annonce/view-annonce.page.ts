import { Component, OnInit } from '@angular/core';
import {Annonce} from '../modeles/annonce';
import {ActivatedRoute, Router} from '@angular/router';
import {AnnonceService} from '../services/annonce.service';

@Component({
  selector: 'app-view-annonce',
  templateUrl: './view-annonce.page.html',
  styleUrls: ['./view-annonce.page.scss'],
})
export class ViewAnnoncePage implements OnInit {

  annonce: Annonce;

  constructor(private activateRoute: ActivatedRoute, private annonceService: AnnonceService, public route: Router) {
  }

  ngOnInit() {
    this.annonce = new Annonce();
    this.annonceService.selectOne(this.activateRoute.snapshot.params.id).then((data) => {
      this.annonce.id = data.id;
      this.annonce.titre = data.titre;
      this.annonce.texte = data.texte;
      this.annonce.date = data.date;
    });
  }

  public updateForm(annonce: Annonce) {
    this.route.navigate(['/update-annonce/' + annonce.id]);
  }

}
