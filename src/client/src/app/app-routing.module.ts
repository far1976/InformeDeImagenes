// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { EcografiaEditComponent} from './pages/ecografia-edit/ecografia-edit.component';
import { EcografiaListComponent} from './pages/ecografia-list/ecografia-list.component';
import { UserTypeEditComponent} from './pages/user-type-edit/user-type-edit.component';
import { UserTypeListComponent} from './pages/user-type-list/user-type-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'ecografias/:id',  loadChildren: './pages/ecografia-edit/ecografia-edit.module#EcografiaEditModule' , canActivate: [AuthGuard] },
    { path: 'ecografias',  loadChildren: './pages/ecografia-list/ecografia-list.module#EcografiaListModule' , canActivate: [AuthGuard] },
    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'usertypes/:id',  loadChildren: './pages/user-type-edit/user-type-edit.module#UserTypeEditModule' , canActivate: [AuthGuard] },
    { path: 'usertypes',  loadChildren: './pages/user-type-list/user-type-list.module#UserTypeListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
