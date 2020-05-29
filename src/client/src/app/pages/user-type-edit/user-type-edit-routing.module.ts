import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserTypeEditComponent } from './user-type-edit.component';

const routes: Routes = [
  {
    path: '',
    component: UserTypeEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTypeEditRoutingModule { }
