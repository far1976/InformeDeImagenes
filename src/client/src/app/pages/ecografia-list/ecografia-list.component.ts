import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { EcografiaService } from '../../services/ecografia.service';
// Import Models
import { Ecografia } from '../../domain/informe-de-imagenes_db/ecografia';

// START - USED SERVICES
/**
* EcografiaService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* EcografiaService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Ecografia
 * @class EcografiaListComponent
 */
@Component({
    selector: 'app-ecografia-list',
    templateUrl: './ecografia-list.component.html',
    styleUrls: ['./ecografia-list.component.css']
})
export class EcografiaListComponent implements OnInit {
    list: Ecografia[];
    search: any = {};
    idSelected: string;
    constructor(
        private ecografiaService: EcografiaService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.ecografiaService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Ecografia to remove
     *
     * @param {string} id Id of the Ecografia to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Ecografia
     */
    deleteItem() {
        this.ecografiaService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
