package com.educom.controller.base;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import java.util.ArrayList;
import org.springframework.security.access.annotation.Secured;
import org.springframework.beans.factory.annotation.Autowired;
import com.educom.db.educom_db.service.ContactService;
import com.educom.db.educom_db.entity.Contact;

//IMPORT RELATIONS

public class ContactBaseController {
    
    @Autowired
	ContactService contactService;



//CRUD METHODS



/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	
}
