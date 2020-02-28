package com.example.dhsport.crud.search.repository.api;

import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import com.example.dhsport.crud.search.model.Product;
@Repository
public interface IProductRepository extends CrudRepository<Product, Long>{
	
}
