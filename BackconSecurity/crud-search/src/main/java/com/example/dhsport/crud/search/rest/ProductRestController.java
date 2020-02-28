package com.example.dhsport.crud.search.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dhsport.crud.search.model.Product;
import com.example.dhsport.crud.search.service.api.ProductService;

@RestController
@RequestMapping("/api")
public class ProductRestController {
	
	@Autowired
	private ProductService productService;
	@GetMapping("/all")
	public List<Product> getAll() {
		return productService.getAll();
	}
	
	@GetMapping("/find/{id}")
	public Product find(@PathVariable Long id) {
		return productService.get(id);
	}
	
	@PostMapping("/save")
	public ResponseEntity<Product> save(@RequestBody Product product) {
		Product obj = productService.save(product);
		
		return new ResponseEntity<Product>(obj, HttpStatus.OK);
	}
	
	@GetMapping("/delete/{id}")
	public ResponseEntity<Product> delete(@PathVariable Long id) {
		Product product = productService.get(id);
		if (product != null) {
			productService.delete(id);
		} else {
			return new ResponseEntity<Product>(product, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return new ResponseEntity<Product>(product, HttpStatus.OK);
		
	}
	
}
