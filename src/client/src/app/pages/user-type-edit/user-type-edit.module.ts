import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTypeEditComponent } from './user-type-edit.component';
import { UserTypeEditRoutingModule } from './user-type-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    UserTypeEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    UserTypeEditComponent
  ]
})
export class UserTypeEditModule { }
