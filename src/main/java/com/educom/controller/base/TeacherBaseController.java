package com.educom.controller.base;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import java.util.ArrayList;
import org.springframework.security.access.annotation.Secured;
import org.springframework.beans.factory.annotation.Autowired;
import com.educom.db.educom_db.service.TeacherService;
import com.educom.db.educom_db.entity.Teacher;

//IMPORT RELATIONS
import com.educom.db.educom_db.entity.Subject;

public class TeacherBaseController {
    
    @Autowired
	TeacherService teacherService;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({ "ROLE_PRIVATE_USER" })
		@RequestMapping(value = "/teacher", method = RequestMethod.POST, headers = "Accept=application/json")
	public Teacher insert(@RequestBody Teacher obj) {
		Teacher result = teacherService.insert(obj);

	    
		
		return result;
	}

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/teacher/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
	public void delete(@PathVariable("id") Long id) {
		teacherService.delete(id);
	}
	

    //CRUD - FIND BY SubjectId
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/teacher/findBysubjectId/{key}", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Teacher> findBysubjectId(@PathVariable("key") Long idsubjectId) {
		List<Teacher> list = teacherService.findBysubjectId(idsubjectId);
		return list;
	}
	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/teacher/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
	public Teacher get(@PathVariable Long id) {
		Teacher obj = teacherService.get(id);
		
		
		
		return obj;
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/teacher", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Teacher> getList() {
		return teacherService.getList();
	}
	
	

    //CRUD - EDIT
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/teacher/{id}", method = RequestMethod.POST, headers = "Accept=application/json")
	public Teacher update(@RequestBody Teacher obj, @PathVariable("id") Long id) {
		Teacher result = teacherService.update(obj, id);

	    
		
		return result;
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	
}
