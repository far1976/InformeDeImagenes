import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcografiaEditComponent } from './ecografia-edit.component';
import { EcografiaEditRoutingModule } from './ecografia-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    EcografiaEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    EcografiaEditComponent
  ]
})
export class EcografiaEditModule { }
