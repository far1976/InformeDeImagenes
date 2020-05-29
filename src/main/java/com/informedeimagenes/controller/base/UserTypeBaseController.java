package com.informedeimagenes.controller.base;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.bson.types.ObjectId;
import org.springframework.security.access.annotation.Secured;
import org.springframework.beans.factory.annotation.Autowired;
import com.informedeimagenes.db.informedeimagenes_db.service.UserTypeService;
import com.informedeimagenes.db.informedeimagenes_db.entity.UserType;

//IMPORT RELATIONS
import com.informedeimagenes.db.informedeimagenes_db.entity.User;

public class UserTypeBaseController {
    
    @Autowired
	UserTypeService usertypeService;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/usertype",method = RequestMethod.POST, headers = "Accept=application/json")
	public UserType insert(@RequestBody UserType obj) {
		 return usertypeService.insert(obj);
	}

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/usertype/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
	public void delete(@PathVariable("id") String id) {
		usertypeService.delete(id);
	}
	

    //CRUD - FIND BY Type
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/usertype/findBytype/{key}", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<UserType> findByType(@PathVariable("key") String idType) {
		return usertypeService.findByType(idType);
	}
	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/usertype/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
	public UserType get(@PathVariable String id) {
		return usertypeService.get(id);
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/usertype", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<UserType> getList() {
		return usertypeService.getList();
	}
	
	

    //CRUD - EDIT
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/usertype/{id}", method = RequestMethod.POST, headers = "Accept=application/json")
	public UserType update(@RequestBody UserType obj) {
		return usertypeService.update(obj);
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	
}
