import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcografiaListComponent } from './ecografia-list.component';
import { EcografiaListRoutingModule } from './ecografia-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    EcografiaListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    EcografiaListComponent
  ]
})
export class EcografiaListModule { }
