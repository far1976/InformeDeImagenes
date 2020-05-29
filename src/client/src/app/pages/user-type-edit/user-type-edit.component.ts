// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { UserTypeService } from '../../services/user-type.service';
import { UserService } from '../../services/user.service';
// Import Models
import { UserType } from '../../domain/informe-de-imagenes_db/user-type';
import { User } from '../../domain/informe-de-imagenes_db/user';

// START - USED SERVICES
/**
* UserTypeService.create
*	@description CRUD ACTION create
*
* UserTypeService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* UserTypeService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* UserService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a UserType
 */
@Component({
    selector: 'app-user-type-edit',
    templateUrl: 'user-type-edit.component.html',
    styleUrls: ['user-type-edit.component.css']
})
export class UserTypeEditComponent implements OnInit {
    item: UserType;
    list_UserType: User[];
    model: UserType;
    formValid: Boolean;

    constructor(
    private usertypeService: UserTypeService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new UserType();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.usertypeService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.userService.list().subscribe(list => this.list_UserType = list);
        });
    }


    /**
     * Save UserType
     *
     * @param {boolean} formValid Form validity check
     * @param UserType item UserType to save
     */
    save(formValid: boolean, item: UserType): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.usertypeService.update(item).subscribe(data => this.goBack());
            } else {
                this.usertypeService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



