package com.example.dhsport.crud.search.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.example.dhsport.crud.search.commons.GenericServiceImpl;
import com.example.dhsport.crud.search.model.Client;
import com.example.dhsport.crud.search.repository.api.IClientRepository;
import com.example.dhsport.crud.search.service.api.ClientService;
@Service
public class ClientServiceImpl extends GenericServiceImpl<Client, Long> implements ClientService{
	
	@Autowired
	private IClientRepository iClient;

	@Override
	public CrudRepository<Client, Long> getDao() {
		
		return iClient;
	}

	@Override
	public List<Client> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
