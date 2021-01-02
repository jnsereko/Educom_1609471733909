package com.educom.controller.base;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import java.util.ArrayList;
import org.springframework.security.access.annotation.Secured;
import org.springframework.beans.factory.annotation.Autowired;
import com.educom.db.educom_db.service.ClassService;
import com.educom.db.educom_db.entity.Class;

//IMPORT RELATIONS
import com.educom.db.educom_db.entity.Subject;

public class ClassBaseController {
    
    @Autowired
	ClassService classService;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({ "ROLE_PRIVATE_USER" })
		@RequestMapping(value = "/class", method = RequestMethod.POST, headers = "Accept=application/json")
	public Class insert(@RequestBody Class obj) {
		Class result = classService.insert(obj);

	    
		
		return result;
	}

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/class/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
	public void delete(@PathVariable("id") Long id) {
		classService.delete(id);
	}
	

    //CRUD - FIND BY ClassSubject
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/class/findByclassSubject/{key}", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Class> findByclassSubject(@PathVariable("key") Long idclassSubject) {
		List<Class> list = classService.findByclassSubject(idclassSubject);
		return list;
	}
	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/class/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
	public Class get(@PathVariable Long id) {
		Class obj = classService.get(id);
		
		
		
		return obj;
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/class", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Class> getList() {
		return classService.getList();
	}
	
	

    //CRUD - EDIT
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/class/{id}", method = RequestMethod.POST, headers = "Accept=application/json")
	public Class update(@RequestBody Class obj, @PathVariable("id") Long id) {
		Class result = classService.update(obj, id);

	    
		
		return result;
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	
}
