package com.educom.db.educom_db.entity.base;

/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
                                                                                   
 * DO NOT EDIT THIS FILE!! 
 *
 *  FOR CUSTOMIZE SchoolBase PLEASE EDIT ../School.java
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER CODE GENERATION --
 * 
 */
 

/**
 * This is the model of School object
 * 
 */
 
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;


import org.springframework.jdbc.core.RowMapper;
import com.educom.db.educom_db.entity.School;

public class SchoolBase implements RowMapper<School>{
	
	private Long _id;
	
	// Attributes
    private String schoolName;
	
	
	
	@Override
	public School mapRow(ResultSet rs, int rowNum) throws SQLException {
		
		School obj = new School();
		try {
			obj.set_id(rs.getLong("id"));
			obj.setSchoolName(rs.getString("schoolName"));
			
        	
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public Long get_id() {
		return _id;
	}

	public void set_id(Long _id) {
		this._id = _id;
	}
	
	public String getSchoolName() {
		return schoolName;
	}


	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}
	
    
    
    
    
}