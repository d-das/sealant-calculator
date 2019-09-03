import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
   // using the injected ModalController this page
   // can "dismiss" itself and optionally pass back data
   this.modalCtrl.dismiss({
     'dismissed': true
   });
 }

}
