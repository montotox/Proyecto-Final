package com.example.dhsport.crud.search.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.dhsport.crud.search.model.Client;
import com.example.dhsport.crud.search.service.api.ClientService;

@Controller
@RequestMapping("/admin/clients")
public class ClientController {
	
	@Autowired
	private ClientService clientService;
	
	@RequestMapping("")
	public String pannelClients(Model model) {
		model.addAttribute("listC", clientService.getAll());
		return "clients";
	}
	
	@GetMapping("/save/{id}")
	public String showSaveCLients(@PathVariable("id") Long id, Model model) {
		if (id != null && id != 0) {
			model.addAttribute("client", clientService.get(id));
		} else {
			model.addAttribute("client", new Client());
		}
		return "saveClient";
	}
	
	@PostMapping("/save")
	public String saveClient(Client client, Model model) {
		clientService.save(client);
		return "redirect:/admin/clients";
	}
	
	@GetMapping("/delete/{id}")
	public String deleteClient(@PathVariable Long id, Model model) {
		clientService.delete(id);
		return "redirect:/admin/clients";
	}

}
