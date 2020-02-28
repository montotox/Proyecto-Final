package com.example.dhsport.crud.search.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppController {
	
	@GetMapping({"","/","/login"})
	public String index() {
		return "index";
	}
	
	@GetMapping("/admin")
	public String admin() {
		return "admin";
	}
	

}
