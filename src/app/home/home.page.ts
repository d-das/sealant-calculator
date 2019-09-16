import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public currentPopover = null;
  constructor(
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController) {
  }



  async presentPopover(event: any) {
    // console.log("event:", event);
    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      event: event,
      translucent: true,
      cssClass: 'custom-popover'
    });
    this.currentPopover = popover;
    return await popover.present();
  }

  dismissPopover(){
    console.log("dismissPopover");
    if(this.currentPopover){
      this.currentPopover.dismiss().then(() => { this.currentPopover = null; })
    }
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave");
    this.dismissPopover();
  }

}
