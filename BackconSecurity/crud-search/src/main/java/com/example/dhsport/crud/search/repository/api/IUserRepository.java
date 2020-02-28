package com.example.dhsport.crud.search.repository.api;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface IUserRepository extends CrudRepository<com.example.dhsport.crud.search.model.User, Long>{
	
	public Optional<com.example.dhsport.crud.search.model.User> findByUsername(String username);

}
