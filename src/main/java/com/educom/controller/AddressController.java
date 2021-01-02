package com.educom.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.context.annotation.PropertySource;

import com.educom.controller.base.AddressBaseController;

@RestController
@PropertySource("classpath:${configfile.path}/Educom.properties")
@RequestMapping(value="${endpoint.api}", headers = "Accept=application/json")
public class AddressController extends AddressBaseController {

	//OVERRIDE HERE YOUR CUSTOM CONTROLLER

}
