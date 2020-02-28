package com.grupo7.backoffice.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.grupo7.backoffice.commons.GenericServiceImpl;
import com.grupo7.backoffice.model.Product;
import com.grupo7.backoffice.repository.IProductRepository;
import com.grupo7.backoffice.service.ProductService;
@Service
public class ProductServiceImpl extends GenericServiceImpl<Product, Long> implements ProductService {
	
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
