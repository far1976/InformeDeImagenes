import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcografiaEditComponent } from './ecografia-edit.component';

const routes: Routes = [
  {
    path: '',
    component: EcografiaEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcografiaEditRoutingModule { }
