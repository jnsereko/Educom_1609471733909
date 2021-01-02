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

import com.educom.db.educom_db.entity.Subject;
import com.educom.db.educom_db.service.SubjectService;

//IMPORT RELATIONS
import com.educom.db.educom_db.entity.Subject;
import com.educom.db.educom_db.entity.Subject;

@Service
public class SubjectBaseService {

	private static NamedParameterJdbcTemplate jdbcTemplate;
	
		@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}
	


    //CRUD METHODS
    
    //CRUD - CREATE
    	
	public Subject insert(Subject obj) {
		Long id = jdbcTemplate.queryForObject("select max(_id) from `subject`", new MapSqlParameterSource(), Long.class);
		obj.set_id(id == null ? 1 : id + 1);
		String sql = "INSERT INTO `subject` (`_id`, `subjectCode`,`subjectName`) VALUES (:id,:subjectCode,:subjectName)";
			SqlParameterSource parameters = new MapSqlParameterSource()
		    .addValue("id", obj.get_id())
			.addValue("subjectCode", obj.getSubjectCode())
			.addValue("subjectName", obj.getSubjectName());
		
		jdbcTemplate.update(sql, parameters);
		return obj;
	}
	
    	
    //CRUD - REMOVE
    
	public void delete(Long id) {
		String sql = "DELETE FROM `Subject` WHERE `_id`=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
		
		jdbcTemplate.update(sql, parameters);
	}

    	
    //CRUD - GET ONE
    	
	public Subject get(Long id) {
	    
		String sql = "select * from `Subject` where `_id` = :id";
		
	    SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
	    
	    return (Subject) jdbcTemplate.queryForObject(sql, parameters, new BeanPropertyRowMapper(Subject.class));
	}


    	
        	
    //CRUD - GET LIST
    	
	public List<Subject> getList() {
	    
		String sql = "select * from `Subject`";
		
	    SqlParameterSource parameters = new MapSqlParameterSource();
	    return jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper(Subject.class));
	    
	    
	}

    	
    //CRUD - EDIT
    	
	public Subject update(Subject obj, Long id) {

		String sql = "UPDATE `Subject` SET `subjectCode` = :subjectCode,`subjectName` = :subjectName  WHERE `_id`=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id)
			.addValue("subjectCode", obj.getSubjectCode())
			.addValue("subjectName", obj.getSubjectName());
		jdbcTemplate.update(sql, parameters);
	    return obj;
	}
	
    	
    
    
    
        
    

    
    /*
     * CUSTOM SERVICES
     * 
     *	These services will be overwritten and implemented in SubjectService.java
     */
    

}
