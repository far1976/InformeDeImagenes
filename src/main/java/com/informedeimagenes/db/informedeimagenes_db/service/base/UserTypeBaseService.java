package com.informedeimagenes.db.informedeimagenes_db.service.base;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.informedeimagenes.db.informedeimagenes_db.entity.UserType;

//IMPORT RELATIONS
import com.informedeimagenes.db.informedeimagenes_db.entity.User;

@Service
public class UserTypeBaseService {

	
	@Autowired
	private Datastore datastore;


    //CRUD METHODS
    
    //CRUD - CREATE
    	
	public UserType insert(UserType obj) {
		datastore.save(obj);
		return obj;
	}
	
    	
    //CRUD - REMOVE
    
	public void delete(String id) {
		Query<UserType> query = datastore.createQuery(UserType.class).field("_id").equal(new ObjectId(id));
		datastore.delete(query);
	}

    	
    //CRUD - FIND BY Type
    	
	public List<UserType> findByType(String idType) {
		return datastore.createQuery(UserType.class).field("type").equal(new ObjectId(idType)).asList();
	}
    	
    //CRUD - GET ONE
    	
	public UserType get(String id) {
		return datastore.find(UserType.class).field("_id").equal(new ObjectId(id)).get();
	}

    	
        	
    //CRUD - GET LIST
    	
	public List<UserType> getList() {
		return (ArrayList<UserType>) datastore.find(UserType.class).asList();
	}

    	
    //CRUD - EDIT
    	
	public UserType update(UserType obj) {
		datastore.save(obj);
		return obj;
	}
	
    	
    
    

    
    /*
     * CUSTOM SERVICES
     * 
     *	These services will be overwritten and implemented in UserTypeService.java
     */
    


}
