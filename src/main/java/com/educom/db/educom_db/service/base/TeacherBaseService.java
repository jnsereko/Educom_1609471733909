package com.educom.db.educom_db.service.base;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Service;

import com.educom.db.educom_db.entity.Teacher;
import com.educom.db.educom_db.service.TeacherService;

//IMPORT RELATIONS
import com.educom.db.educom_db.entity.Subject;

@Service
public class TeacherBaseService {

	private static NamedParameterJdbcTemplate jdbcTemplate;
	
		@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}
	


    //CRUD METHODS
    
    //CRUD - CREATE
    	
	public Teacher insert(Teacher obj) {
		Long id = jdbcTemplate.queryForObject("select max(_id) from `teacher`", new MapSqlParameterSource(), Long.class);
		obj.set_id(id == null ? 1 : id + 1);
		String sql = "INSERT INTO `teacher` (`_id`, `address`,`administration`,`contact`,`dob`,`email`,`firstName`,`gender`,`lastName`,`nin`,`subjectId`) VALUES (:id,:address,:administration,:contact,:dob,:email,:firstName,:gender,:lastName,:nin, :subjectId )";
			SqlParameterSource parameters = new MapSqlParameterSource()
		    .addValue("id", obj.get_id())
			.addValue("address", obj.getAddress())
			.addValue("administration", obj.getAdministration())
			.addValue("contact", obj.getContact())
			.addValue("dob", obj.getDob())
			.addValue("email", obj.getEmail())
			.addValue("firstName", obj.getFirstName())
			.addValue("gender", obj.getGender())
			.addValue("lastName", obj.getLastName())
			.addValue("nin", obj.getNin())
			.addValue("subjectId", obj.getSubjectId());
		
		jdbcTemplate.update(sql, parameters);
		return obj;
	}
	
    	
    //CRUD - REMOVE
    
	public void delete(Long id) {
		String sql = "DELETE FROM `Teacher` WHERE `_id`=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
		
		jdbcTemplate.update(sql, parameters);
	}

    	
    //CRUD - FIND BY SubjectId
    	
	public List<Teacher> findBysubjectId(Long idsubjectId) {
		
		String sql = "select * from `Teacher` WHERE `subjectId` = :idsubjectId";
		
	    SqlParameterSource parameters = new MapSqlParameterSource()
		.addValue("idsubjectId", idsubjectId);
	    
	    return jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper(Teacher.class));
	}
    	
    //CRUD - GET ONE
    	
	public Teacher get(Long id) {
	    
		String sql = "select * from `Teacher` where `_id` = :id";
		
	    SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
	    
	    return (Teacher) jdbcTemplate.queryForObject(sql, parameters, new BeanPropertyRowMapper(Teacher.class));
	}


    	
        	
    //CRUD - GET LIST
    	
	public List<Teacher> getList() {
	    
		String sql = "select * from `Teacher`";
		
	    SqlParameterSource parameters = new MapSqlParameterSource();
	    return jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper(Teacher.class));
	    
	    
	}

    	
    //CRUD - EDIT
    	
	public Teacher update(Teacher obj, Long id) {

		String sql = "UPDATE `Teacher` SET `address` = :address,`administration` = :administration,`contact` = :contact,`dob` = :dob,`email` = :email,`firstName` = :firstName,`gender` = :gender,`lastName` = :lastName,`nin` = :nin , `subjectId` = :subjectId  WHERE `_id`=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id)
			.addValue("address", obj.getAddress())
			.addValue("administration", obj.getAdministration())
			.addValue("contact", obj.getContact())
			.addValue("dob", obj.getDob())
			.addValue("email", obj.getEmail())
			.addValue("firstName", obj.getFirstName())
			.addValue("gender", obj.getGender())
			.addValue("lastName", obj.getLastName())
			.addValue("nin", obj.getNin())
			.addValue("subjectId", obj.getSubjectId());
		jdbcTemplate.update(sql, parameters);
	    return obj;
	}
	
    	
    
    
    
    

    
    /*
     * CUSTOM SERVICES
     * 
     *	These services will be overwritten and implemented in TeacherService.java
     */
    

}
