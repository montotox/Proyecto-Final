package com.example.dhsport.crud.search.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.example.dhsport.crud.search.commons.GenericServiceImpl;
import com.example.dhsport.crud.search.model.Product;
import com.example.dhsport.crud.search.repository.api.IProductRepository;
import com.example.dhsport.crud.search.service.api.ProductService;


@Service
public class ProductServiceImpl extends GenericServiceImpl<Product, Long> implements ProductService{
	
	@Autowired
	private IProductRepository iProduct;

	@Override
	public CrudRepository<Product, Long> getDao() {
		// TODO Auto-generated method stub
		return iProduct;
	}

	@Override
	public List<Product> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
