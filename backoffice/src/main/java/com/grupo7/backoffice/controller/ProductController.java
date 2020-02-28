package com.grupo7.backoffice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.grupo7.backoffice.model.Product;
import com.grupo7.backoffice.service.ProductService;

@Controller
@RequestMapping("/admin/products")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@RequestMapping("")
	public String pannelProd(Model model) {
		model.addAttribute("list", productService.getAll());
		return "products";
	}
	
	@GetMapping("/save/{id}")
	public String showSaveProd(@PathVariable("id") Long id, Model model) {
		if (id != null && id != 0) {
			model.addAttribute("product", productService.get(id));
		} else {
			model.addAttribute("product", new Product());
		}
		return "saveProd";
	}
	
	@PostMapping("/save")
	public String saveProd(Product product, Model model) {
		productService.save(product);
		return "redirect:/admin/products";
	}
	
	@GetMapping("/delete/{id}")
	public String deleteProd(@PathVariable Long id, Model model) {
		productService.delete(id);
		return "redirect:/admin/products";
	}

}
