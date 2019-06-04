package com.example.server.entity;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;
	
    @Column(name = "role")
    private int role;
    
    @ManyToOne
    @JoinColumn(name = "group_id" , referencedColumnName = "id")
    private UserGroup user_group;
        
	public User() {
		
	}

	public User(Long id, String username, String password, int role, UserGroup user_group) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.role = role;
		this.user_group = user_group;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getRole() {
		return role;
	}

	public void setRole(int role) {
		this.role = role;
	}

	public UserGroup getUser_group() {
		return user_group;
	}

	public void setUser_group(UserGroup user_group) {
		this.user_group = user_group;
	}

	
	
    
}
