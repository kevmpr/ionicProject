import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertController: AlertController) {}

  async logout(){
    let alert = await this.alertController.create({
      header: 'Ohhh, you are going...',
      message: 'Thank you for using our app, we hope you to back soon'
    })

    await alert.present();
    console.log('Hello world, I am logout')
  }
}
