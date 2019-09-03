import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactPage } from '../contact/contact.page';
import { InstructionsPage } from '../instructions/instructions.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalCtrl: ModalController) {

  }

  async presentInstructions() {
    const modal = await this.modalCtrl.create({
      component: InstructionsPage
    });
    return await modal.present();
  }

  async presentContact() {
    const modal = await this.modalCtrl.create({
      component: ContactPage
    });
    return await modal.present();
  }

}
