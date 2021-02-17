import { Component, OnInit } from '@angular/core';
import {Annonce} from '../modeles/annonce';
import {Router} from '@angular/router';
import {AnnonceService} from '../services/annonce.service';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.page.html',
  styleUrls: ['./list-annonces.page.scss'],
})
export class ListAnnoncesPage implements OnInit {

  annonces: Annonce[];

  constructor(private annonceService: AnnonceService, private route: Router) { }

  ngOnInit() {
    this.load();
  }

  // fonction à chaque entrer dans la page
  ionViewWillEnter(){
    this.load();
  }

  public load(){
    this.annonces = this.annonceService.findAll();
  }

  afficherAnnonces(id: number) {
    //  this.route.navigate(['/voir-commande/' + id]);
    this.route.navigateByUrl('/view-annonce/' + id);
  }

  Number(id: string) {
    const x = id;
    const y: number = + x;
    return y;
  }

}
