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

import com.educom.db.educom_db.entity.Class;
import com.educom.db.educom_db.service.ClassService;

//IMPORT RELATIONS
import com.educom.db.educom_db.entity.Subject;

@Service
public class ClassBaseService {

	private static NamedParameterJdbcTemplate jdbcTemplate;
	
		@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}
	


    //CRUD METHODS
    
    //CRUD - CREATE
    	
	public Class insert(Class obj) {
		Long id = jdbcTemplate.queryForObject("select max(_id) from `class`", new MapSqlParameterSource(), Long.class);
		obj.set_id(id == null ? 1 : id + 1);
		String sql = "INSERT INTO `class` (`_id`, `classCode`,`className`,`classSubject`) VALUES (:id,:classCode,:className, :classSubject )";
			SqlParameterSource parameters = new MapSqlParameterSource()
		    .addValue("id", obj.get_id())
			.addValue("classCode", obj.getClassCode())
			.addValue("className", obj.getClassName())
			.addValue("classSubject", obj.getClassSubject());
		
		jdbcTemplate.update(sql, parameters);
		return obj;
	}
	
    	
    //CRUD - REMOVE
    
	public void delete(Long id) {
		String sql = "DELETE FROM `Class` WHERE `_id`=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
		
		jdbcTemplate.update(sql, parameters);
	}

    	
    //CRUD - FIND BY ClassSubject
    	
	public List<Class> findByclassSubject(Long idclassSubject) {
		
		String sql = "select * from `Class` WHERE `classSubject` = :idclassSubject";
		
	    SqlParameterSource parameters = new MapSqlParameterSource()
		.addValue("idclassSubject", idclassSubject);
	    
	    return jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper(Class.class));
	}
    	
    //CRUD - GET ONE
    	
	public Class get(Long id) {
	    
		String sql = "select * from `Class` where `_id` = :id";
		
	    SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
	    
	    return (Class) jdbcTemplate.queryForObject(sql, parameters, new BeanPropertyRowMapper(Class.class));
	}


    	
        	
    //CRUD - GET LIST
    	
	public List<Class> getList() {
	    
		String sql = "select * from `Class`";
		
	    SqlParameterSource parameters = new MapSqlParameterSource();
	    return jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper(Class.class));
	    
	    
	}

    	
    //CRUD - EDIT
    	
	public Class update(Class obj, Long id) {

		String sql = "UPDATE `Class` SET `classCode` = :classCode,`className` = :className , `classSubject` = :classSubject  WHERE `_id`=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id)
			.addValue("classCode", obj.getClassCode())
			.addValue("className", obj.getClassName())
			.addValue("classSubject", obj.getClassSubject());
		jdbcTemplate.update(sql, parameters);
	    return obj;
	}
	
    	
    
    
    
    

    
    /*
     * CUSTOM SERVICES
     * 
     *	These services will be overwritten and implemented in ClassService.java
     */
    

}
