package com.educom.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.context.annotation.PropertySource;

import com.educom.controller.base.SubjectBaseController;

@RestController
@PropertySource("classpath:${configfile.path}/Educom.properties")
@RequestMapping(value="${endpoint.api}", headers = "Accept=application/json")
public class SubjectController extends SubjectBaseController {

	//OVERRIDE HERE YOUR CUSTOM CONTROLLER

}
