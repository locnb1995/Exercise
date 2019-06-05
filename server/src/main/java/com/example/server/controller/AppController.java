package com.example.server.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.server.entity.*;

import com.example.server.responsitory.UserGroupResponsitory;
import com.example.server.responsitory.UserResponsitory;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AppController {
	
	@Autowired
	private UserGroupResponsitory userGroupResponsitory;
	
	@Autowired
	private UserResponsitory userResponsitory;
	
	@GetMapping("/")
	public List<User> index(){
		return userResponsitory.findAll();
	}
	
	@PostMapping("/addUser")
	public void addUser(@RequestBody User user) {
		userResponsitory.save(user);
	}
	
	@PostMapping("/addManyUser")
	public void addUser(@RequestBody ArrayList<User> listUser) {
		for(User user : listUser) {
			userResponsitory.save(user);
		}
	}
	
	@DeleteMapping("/deleteUserById/{id}")
	public void deleteUserById(@PathVariable String id) {
		Long user_id = Long.parseLong(id);
		userResponsitory.deleteById(user_id);
	}
	
}
