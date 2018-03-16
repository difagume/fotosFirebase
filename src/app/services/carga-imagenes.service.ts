import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

@Injectable()
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'home/dfguzman/Imágenes/firebase';

  constructor( private db:AngularFirestore ) { }

  cargarImagenesFirebase( imagenes: FileItem[] ){
    console.log(imagenes);
  }

  private guardarImagen( imagen:{ nombre:string, url:string } ){
    this.db.collection(`/${this.CARPETA_IMAGENES}`)
    .add( imagen )
  }

}
