import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private alertController: AlertController) {}

  async home(){
    let alert = await this.alertController.create({
      header: 'Welcome to our app',
      message: 'hi'
    })

    await alert.present();
    console.log('Hello world, I am home')
  }
}
