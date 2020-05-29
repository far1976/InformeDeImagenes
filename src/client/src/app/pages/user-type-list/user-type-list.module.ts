import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTypeListComponent } from './user-type-list.component';
import { UserTypeListRoutingModule } from './user-type-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    UserTypeListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    UserTypeListComponent
  ]
})
export class UserTypeListModule { }
