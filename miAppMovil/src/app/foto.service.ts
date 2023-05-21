import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';


@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor() { }

  public fotos: UserFoto[] =[];

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }

  const fotoGuardada = await this.savePicture(CapturePhoto);

  private async savePicture(photo: Photo) {
    //Convierte foto a Base 64    const base64Data = await this.readAsBase64(photo);
    // Escribe archivo en el directorio    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data    });
    if (this.platform.is('hybrid')) {
      console.log(savedFile.uri, Capacitor.convertFileSrc(savedFile.uri), "hybrid")
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    }
    else {
      console.log(fileName, photo.webPath, "web");
      return {
        filepath: fileName,
        webviewPath: photo.webPath      };
    }
  }

}

export interface UserFoto {
  filepath: string; 
  webviewPath: string; 
}


