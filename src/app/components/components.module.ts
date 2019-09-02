import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    CalculatorComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule

  ],
  exports: [
    CalculatorComponent,
  ]
})
export class ComponentsModule { }
