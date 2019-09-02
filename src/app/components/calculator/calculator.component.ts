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
  public fluidOz: number = 1;
  public handPumps: number = 3;
  public applicationOz: number = 2;

  constructor() { }

  ngOnInit() {}

  onChange($event){
    console.log($event);
  }
  ngDoCheck(){
    console.log("sysMeasure:", this.sysMeasure);
    console.log("roadType:", this.roadType);
  }
}
