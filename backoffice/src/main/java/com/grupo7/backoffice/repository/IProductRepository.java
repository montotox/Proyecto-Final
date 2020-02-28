package com.grupo7.backoffice.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.grupo7.backoffice.model.Product;

@Repository
public interface IProductRepository extends CrudRepository<Product, Long>{

}
