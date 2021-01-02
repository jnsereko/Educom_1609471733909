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

import com.educom.db.educom_db.entity.Student;
import com.educom.db.educom_db.service.StudentService;

//IMPORT RELATIONS

@Service
public class StudentBaseService {

	private static NamedParameterJdbcTemplate jdbcTemplate;
	
		@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}
	


    //CRUD METHODS
    
    //CRUD - CREATE
    	
	public Student insert(Student obj) {
		Long id = jdbcTemplate.queryForObject("select max(_id) from `student`", new MapSqlParameterSource(), Long.class);
		obj.set_id(id == null ? 1 : id + 1);
		String sql = "INSERT INTO `student` (`_id`, `address`,`contact`,`dob`,`email`,`firstName`,`gender`,`lastName`) VALUES (:id,:address,:contact,:dob,:email,:firstName,:gender,:lastName)";
			SqlParameterSource parameters = new MapSqlParameterSource()
		    .addValue("id", obj.get_id())
			.addValue("address", obj.getAddress())
			.addValue("contact", obj.getContact())
			.addValue("dob", obj.getDob())
			.addValue("email", obj.getEmail())
			.addValue("firstName", obj.getFirstName())
			.addValue("gender", obj.getGender())
			.addValue("lastName", obj.getLastName());
		
		jdbcTemplate.update(sql, parameters);
		return obj;
	}
	
    	
    //CRUD - REMOVE
    
	public void delete(Long id) {
		String sql = "DELETE FROM `Student` WHERE `_id`=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
		
		jdbcTemplate.update(sql, parameters);
	}

    	
    //CRUD - GET ONE
    	
	public Student get(Long id) {
	    
		String sql = "select * from `Student` where `_id` = :id";
		
	    SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
	    
	    return (Student) jdbcTemplate.queryForObject(sql, parameters, new BeanPropertyRowMapper(Student.class));
	}


    	
        	
    //CRUD - GET LIST
    	
	public List<Student> getList() {
	    
		String sql = "select * from `Student`";
		
	    SqlParameterSource parameters = new MapSqlParameterSource();
	    return jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper(Student.class));
	    
	    
	}

    	
    //CRUD - EDIT
    	
	public Student update(Student obj, Long id) {

		String sql = "UPDATE `Student` SET `address` = :address,`contact` = :contact,`dob` = :dob,`email` = :email,`firstName` = :firstName,`gender` = :gender,`lastName` = :lastName  WHERE `_id`=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id)
			.addValue("address", obj.getAddress())
			.addValue("contact", obj.getContact())
			.addValue("dob", obj.getDob())
			.addValue("email", obj.getEmail())
			.addValue("firstName", obj.getFirstName())
			.addValue("gender", obj.getGender())
			.addValue("lastName", obj.getLastName());
		jdbcTemplate.update(sql, parameters);
	    return obj;
	}
	
    	
    
    


    
    /*
     * CUSTOM SERVICES
     * 
     *	These services will be overwritten and implemented in StudentService.java
     */
    

}
