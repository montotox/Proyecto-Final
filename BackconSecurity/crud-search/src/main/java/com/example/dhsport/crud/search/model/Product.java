package com.example.dhsport.crud.search.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

import com.sun.istack.NotNull;

import lombok.Data;

@Entity
public @Data class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotEmpty
	private String title;
	
	@NotEmpty
	private String description;
	
	@NotNull
	private Double price;
	
	@NotNull
	private Integer stock;
	
}
