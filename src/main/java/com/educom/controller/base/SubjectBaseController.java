package com.educom.controller.base;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import java.util.ArrayList;
import org.springframework.security.access.annotation.Secured;
import org.springframework.beans.factory.annotation.Autowired;
import com.educom.db.educom_db.service.SubjectService;
import com.educom.db.educom_db.entity.Subject;

//IMPORT RELATIONS
import com.educom.db.educom_db.entity.Subject;
import com.educom.db.educom_db.entity.Subject;

public class SubjectBaseController {
    
    @Autowired
	SubjectService subjectService;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({ "ROLE_PRIVATE_USER" })
		@RequestMapping(value = "/subject", method = RequestMethod.POST, headers = "Accept=application/json")
	public Subject insert(@RequestBody Subject obj) {
		Subject result = subjectService.insert(obj);

	    
		
		return result;
	}

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/subject/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
	public void delete(@PathVariable("id") Long id) {
		subjectService.delete(id);
	}
	
	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/subject/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
	public Subject get(@PathVariable Long id) {
		Subject obj = subjectService.get(id);
		
		
		
		return obj;
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/subject", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Subject> getList() {
		return subjectService.getList();
	}
	
	

    //CRUD - EDIT
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/subject/{id}", method = RequestMethod.POST, headers = "Accept=application/json")
	public Subject update(@RequestBody Subject obj, @PathVariable("id") Long id) {
		Subject result = subjectService.update(obj, id);

	    
		
		return result;
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	
}
