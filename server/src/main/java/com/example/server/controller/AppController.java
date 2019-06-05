package com.example.server.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@PutMapping("/editUser")
	public void editUser(@RequestBody User user) {
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
	
	@PostMapping("/checkUserInfo")
	public List<String> checkUserInfo(@RequestBody User user){
		List<String> result = new ArrayList<String>();
		result.add("Invalid username or password");
		List<User> allUser = userResponsitory.findAll();
		for(User user1: allUser) {
			if(user1.getUsername().equals(user.getUsername()) && user1.getPassword().equals(user.getPassword())) {
				if(user1.getRole() != 1) {
					result.remove(0);
					result.add("Your account dont have permission to login this site");
					return result;
				}
				result.remove(0);
				result.add("Login Success");
				result.add(Long.toString(user1.getId()));
				return result;
			}
		}
		return result;
	}
	
}
