package com.informedeimagenes.db.informedeimagenes_db.service.base;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.informedeimagenes.db.informedeimagenes_db.entity.Ecografia;

//IMPORT RELATIONS
import com.informedeimagenes.db.informedeimagenes_db.entity.Ecografia;

@Service
public class EcografiaBaseService {

	
	@Autowired
	private Datastore datastore;


    //CRUD METHODS
    
    //CRUD - CREATE
    	
	public Ecografia insert(Ecografia obj) {
		datastore.save(obj);
		return obj;
	}
	
    	
    //CRUD - REMOVE
    
	public void delete(String id) {
		Query<Ecografia> query = datastore.createQuery(Ecografia.class).field("_id").equal(new ObjectId(id));
		datastore.delete(query);
	}

    	
    //CRUD - FIND BY Type
    	
	public List<Ecografia> findByType(String idType) {
		return datastore.createQuery(Ecografia.class).field("type").equal(new ObjectId(idType)).asList();
	}
    	
    //CRUD - GET ONE
    	
	public Ecografia get(String id) {
		return datastore.find(Ecografia.class).field("_id").equal(new ObjectId(id)).get();
	}

    	
        	
    //CRUD - GET LIST
    	
	public List<Ecografia> getList() {
		return (ArrayList<Ecografia>) datastore.find(Ecografia.class).asList();
	}

    	
    //CRUD - EDIT
    	
	public Ecografia update(Ecografia obj) {
		datastore.save(obj);
		return obj;
	}
	
    	
    
    

    
    /*
     * CUSTOM SERVICES
     * 
     *	These services will be overwritten and implemented in EcografiaService.java
     */
    


}
