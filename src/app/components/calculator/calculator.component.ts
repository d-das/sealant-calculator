import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {

  public sysMeasure:string = 'standard';
  public roadType:string = 'onRoad';
  //sealant factor
  private factorA:number = 0.1780327;
  // offroad factor
  private factorB:number = 3;
  // hand pump factor
  private factorC:number = 8;
  // inches factor
  private factorD:number = 0.0393701;
  public width:number = 0;
  public rim:number = 0;
  private sWidth:number = 0;
  private sRim:number = 0;
  public fluidOz: number = 0;
  public handPumps: number = 0;
  public applicationOz: number = 0;
  public ticker: number = 0;

  constructor() { }

  ngOnInit() {}

  calculate(){
    if(this.sysMeasure == "metric"){
      this.sWidth=this.width*this.factorD;
      this.sRim=this.rim*this.factorD;
    }
    else{
      this.sWidth = this.width;
      this.sRim = this.rim
    }
    let x:number = (this.sWidth*this.sRim)*this.factorA;
    if(this.roadType == "offRoad"){
      console.log("x:", x);
      this.fluidOz = x*this.factorB;
    }
    else{
      this.fluidOz =x;
    }
    this.applicationOz = Math.ceil(this.fluidOz/4)*4;
    this.handPumps = this.applicationOz/this.factorC;

    //round out the floats
    this.fluidOz = parseFloat(this.fluidOz.toFixed(1));
    this.handPumps = parseFloat(this.handPumps.toFixed(1));
    console.log("fluidOz:", this.fluidOz);
    console.log("handPumps:", this.handPumps);

  }

  poop(){
    console.log("message");
  }

  ngDoCheck(){
    this.ticker += 1;
    this.calculate();
    console.log("ticker:", this.ticker);
  }
}
