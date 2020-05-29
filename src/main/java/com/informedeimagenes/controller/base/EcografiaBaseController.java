package com.informedeimagenes.controller.base;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.bson.types.ObjectId;
import org.springframework.security.access.annotation.Secured;
import org.springframework.beans.factory.annotation.Autowired;
import com.informedeimagenes.db.informedeimagenes_db.service.EcografiaService;
import com.informedeimagenes.db.informedeimagenes_db.entity.Ecografia;

//IMPORT RELATIONS
import com.informedeimagenes.db.informedeimagenes_db.entity.Ecografia;

public class EcografiaBaseController {
    
    @Autowired
	EcografiaService ecografiaService;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/ecografia",method = RequestMethod.POST, headers = "Accept=application/json")
	public Ecografia insert(@RequestBody Ecografia obj) {
		 return ecografiaService.insert(obj);
	}

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/ecografia/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
	public void delete(@PathVariable("id") String id) {
		ecografiaService.delete(id);
	}
	

    //CRUD - FIND BY Type
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/ecografia/findBytype/{key}", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Ecografia> findByType(@PathVariable("key") String idType) {
		return ecografiaService.findByType(idType);
	}
	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/ecografia/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
	public Ecografia get(@PathVariable String id) {
		return ecografiaService.get(id);
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/ecografia", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Ecografia> getList() {
		return ecografiaService.getList();
	}
	
	

    //CRUD - EDIT
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/ecografia/{id}", method = RequestMethod.POST, headers = "Accept=application/json")
	public Ecografia update(@RequestBody Ecografia obj) {
		return ecografiaService.update(obj);
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	
}
