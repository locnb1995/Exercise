package com.example.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.server.entity.*;

import com.example.server.responsitory.UserGroupResponsitory;
import com.example.server.responsitory.UserResponsitory;

@RestController
public class AppController {
	
	@Autowired
	private UserGroupResponsitory userGroupResponsitory;
	
	@Autowired
	private UserResponsitory userResponsitory;
	
	@GetMapping
	public List<User> index(){
		return userResponsitory.findAll();
	}
	
}
