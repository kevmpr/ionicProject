import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private alertController: AlertController) {}

  async login(){
    let alert = await this.alertController.create({
      header: 'Log In',
      inputs: [
        {
        type: 'text',
        name: 'Username',
        placeholder: 'Write your username'
        },
        {
          type: 'password',
          name: 'Password',
          placeholder: 'Write your password'
        }
      ]
    })

    await alert.present();
    console.log('Hello world, I am login')
  }

}
