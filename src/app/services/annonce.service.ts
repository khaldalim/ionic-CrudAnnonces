import { Injectable } from '@angular/core';
import {Storage} from '@ionic/Storage';
import {Annonce} from '../modeles/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private bdd: Storage) { }

  public create(annonce: Annonce) {
    this.bdd.set(annonce.id + '', annonce);
  }

  public update(annonce: Annonce) {
    this.bdd.set(annonce.id, annonce);
  }

  public delete(id: string) {
    this.bdd.remove(id);
  }

  public selectOne(id: string) {
    return this.bdd.get(id); // promise
  }

  findAll() {
    let annonces = [];
    annonces = [];
    this.bdd.forEach((v, k) => {
      annonces.push(v);
    });
    return annonces;
  }
}
