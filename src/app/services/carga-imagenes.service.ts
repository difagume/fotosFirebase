import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

@Injectable()
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'home/dfguzman/Imágenes/firebase';

  constructor( private db:AngularFirestore ) { }

  private guardarImagen( imagen:any ){
    this.db.collection(`/${this.CARPETA_IMAGENES}`);
  }

}
