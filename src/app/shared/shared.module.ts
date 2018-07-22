import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '../../../node_modules/@angular/Forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent
  ],
  exports:[
    StarComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }