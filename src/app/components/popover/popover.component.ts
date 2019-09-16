import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactPage } from '../../contact/contact.page';
import { InstructionsPage } from '../../instructions/instructions.page';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController) { }

  ngOnInit() {}

  async presentInstructions() {
    const modal = await this.modalCtrl.create({
      component: InstructionsPage
    });
    return await modal.present().then(()=>{
        this.dismissPopover();
    }).catch((error)=>{
        console.log("error from catch in present instructions:", error);
    });
  }

  async presentContact() {
    const modal = await this.modalCtrl.create({
      component: ContactPage
    });
    return await modal.present().then(()=>{
        this.dismissPopover();
    }).catch((error)=>{
        console.log("error from catch in present contact:", error);
    });
  }

  async dismissPopover(){
    // console.log("diss");
    return await this.popoverCtrl.dismiss();
  }

}
