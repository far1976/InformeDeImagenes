// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { EcografiaService } from '../../services/ecografia.service';
import { UserService } from '../../services/user.service';
// Import Models
import { Ecografia } from '../../domain/informe-de-imagenes_db/ecografia';
import { User } from '../../domain/informe-de-imagenes_db/user';

// START - USED SERVICES
/**
* EcografiaService.create
*	@description CRUD ACTION create
*
* EcografiaService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* EcografiaService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* UserService.findBy_UserEcografia
*	@description CRUD ACTION findBy_UserEcografia
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Ecografia
 */
@Component({
    selector: 'app-ecografia-edit',
    templateUrl: 'ecografia-edit.component.html',
    styleUrls: ['ecografia-edit.component.css']
})
export class EcografiaEditComponent implements OnInit {
    item: Ecografia;
    externalUser__UserEcografia: User[];
    model: Ecografia;
    formValid: Boolean;

    constructor(
    private ecografiaService: EcografiaService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Ecografia();
        this.externalUser__UserEcografia = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.ecografiaService.get(id).subscribe(item => this.item = item);
                this.userService.findBy_UserEcografia(id).subscribe(list => this.externalUser__UserEcografia = list);
            }
            // Get relations
        });
    }


    /**
     * Save Ecografia
     *
     * @param {boolean} formValid Form validity check
     * @param Ecografia item Ecografia to save
     */
    save(formValid: boolean, item: Ecografia): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.ecografiaService.update(item).subscribe(data => this.goBack());
            } else {
                this.ecografiaService.create(item).subscribe(data => this.goBack());
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



