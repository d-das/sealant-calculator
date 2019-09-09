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
  public ticker: number = 0;

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
    this.ticker += 1;
    console.log("2ticker:", this.ticker);
    console.log("language:", this.language);
    console.log("langBool:", this.langBool);
  }

  dismiss() {
   // using the injected ModalController this page
   // can "dismiss" itself and optionally pass back data
   this.modalCtrl.dismiss({
     'dismissed': true
   });
 }

}
