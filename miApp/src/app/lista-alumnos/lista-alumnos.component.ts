import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  result!: string;

  constructor(private actionSheetCtrl: ActionSheetController) { }

  async presentActionSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Eliminar alumno',
      subHeader: '¿Desea proceder?',
      buttons: [
        {
          text: 'Borrar',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel'
          },
        },
      ],
    });
    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }

  ngOnInit(): void {
  }
  nombre = "Jesus Eduardo";
  alumnos : any = ["Jesus", "Carlos", "Edson", "Maria", "Felipe"];
}
