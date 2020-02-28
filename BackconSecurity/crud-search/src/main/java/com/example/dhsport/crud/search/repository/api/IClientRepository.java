package com.example.dhsport.crud.search.repository.api;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.dhsport.crud.search.model.Client;

@Repository
public interface IClientRepository extends CrudRepository<Client, Long> {
	
	Client findByName(String name);

}
