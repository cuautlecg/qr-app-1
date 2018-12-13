import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( private barcodeScanner: BarcodeScanner,
               public toastCtrl: ToastController ) {

  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode Data', barcodeData);
    }).catch(err => {
      console.log('Ocurrio el siguiente error: ', err);
      this.mostrarError("Tenemos el siguiente error: " + err);
    });
  }

  mostrarError(mensaje: string){
    const toast = this.toastCtrl.create({
      message: mensaje,
      showCloseButton: true,
      closeButtonText: 'X'
    });
    toast.present();
  }

}
