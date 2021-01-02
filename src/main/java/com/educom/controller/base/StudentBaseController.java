package com.educom.controller.base;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import java.util.ArrayList;
import org.springframework.security.access.annotation.Secured;
import org.springframework.beans.factory.annotation.Autowired;
import com.educom.db.educom_db.service.StudentService;
import com.educom.db.educom_db.entity.Student;

//IMPORT RELATIONS

public class StudentBaseController {
    
    @Autowired
	StudentService studentService;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({ "ROLE_PRIVATE_USER" })
		@RequestMapping(value = "/student", method = RequestMethod.POST, headers = "Accept=application/json")
	public Student insert(@RequestBody Student obj) {
		Student result = studentService.insert(obj);

	    
		
		return result;
	}

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/student/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
	public void delete(@PathVariable("id") Long id) {
		studentService.delete(id);
	}
	
	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/student/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
	public Student get(@PathVariable Long id) {
		Student obj = studentService.get(id);
		
		
		
		return obj;
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/student", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Student> getList() {
		return studentService.getList();
	}
	
	

    //CRUD - EDIT
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/student/{id}", method = RequestMethod.POST, headers = "Accept=application/json")
	public Student update(@RequestBody Student obj, @PathVariable("id") Long id) {
		Student result = studentService.update(obj, id);

	    
		
		return result;
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	
}
