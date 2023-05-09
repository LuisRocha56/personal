import { Component } from '@angular/core';
import { FotoService } from '../foto.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public photoService: FotoService) {}


  tomarFoto(){
    this.photoService.addNewToGallery();
  }
}
