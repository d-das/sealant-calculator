import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.page.html',
  styleUrls: ['./instructions.page.scss'],
})
export class InstructionsPage implements OnInit {
  public language:string = "english";
  public langBool:boolean = true;
  public pic1path:string = "assets/images/pictorial-1.jpeg";
  public alttext1:string = "Dimensions";
  public pic2path:string = "assets/images/pictorial-2.jpeg";
  public alttext2:string = "Tire Info";

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  ngDoCheck(){
    if(this.language == "spanish"){
      this.langBool = false;
    }
    else{
      this.langBool = true;
    }
  }

  dismiss() {
   // using the injected ModalController this page
   // can "dismiss" itself and optionally pass back data
   this.modalCtrl.dismiss({
     'dismissed': true
   });
 }

}
