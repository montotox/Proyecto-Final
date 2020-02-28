package com.example.dhsport.crud.search.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

import com.sun.istack.NotNull;

import lombok.Data;
@Entity
public @Data class Client {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	private Long dni;
	
	@NotEmpty
	private String name;
	
	@NotEmpty
	private String adress;
	
	@NotEmpty
	private String email;

}
