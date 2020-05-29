import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { UserTypeService } from '../../services/user-type.service';
// Import Models
import { UserType } from '../../domain/informe-de-imagenes_db/user-type';

// START - USED SERVICES
/**
* UserTypeService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* UserTypeService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of UserType
 * @class UserTypeListComponent
 */
@Component({
    selector: 'app-user-type-list',
    templateUrl: './user-type-list.component.html',
    styleUrls: ['./user-type-list.component.css']
})
export class UserTypeListComponent implements OnInit {
    list: UserType[];
    search: any = {};
    idSelected: string;
    constructor(
        private usertypeService: UserTypeService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.usertypeService.list().subscribe(list => this.list = list);
    }

    /**
     * Select UserType to remove
     *
     * @param {string} id Id of the UserType to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected UserType
     */
    deleteItem() {
        this.usertypeService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
