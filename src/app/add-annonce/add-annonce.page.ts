import {Component, OnInit} from '@angular/core';
import {Annonce} from '../modeles/annonce';

import {ActivatedRoute, Router} from '@angular/router';
import {AnnonceService} from '../services/annonce.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.page.html',
  styleUrls: ['./add-annonce.page.scss'],
})
export class AddAnnoncePage implements OnInit {


  annonce: Annonce;

  constructor(private annonceService: AnnonceService, private activateRoute: ActivatedRoute, private route: Router) {
  }

  ngOnInit() {

    // user vide
    this.annonce = new Annonce();

    // si update => le remplir grace à l'objet user récupé avec "selectOne" avec comme parametre l'ID
    if (this.annonceService.selectOne(this.activateRoute.snapshot.params.id) != null) {
      this.annonceService.selectOne(this.activateRoute.snapshot.params.id).then((data) => {
        this.annonce.id = data.id;
        this.annonce.titre = data.titre;
        this.annonce.texte = data.texte;
        this.annonce.date = data.date;

      });
    }
  }

  ajouterAnnonce() {
    if (this.annonceService.selectOne(this.activateRoute.snapshot.params.id) != null) {
      this.annonceService.update(this.annonce);
    } else {
      this.annonceService.create(this.annonce);
    }
    this.route.navigate(['/list-annonces']);


  }

}
