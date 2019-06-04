package com.example.server.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.server.entity.User;

public interface UserResponsitory extends JpaRepository<User, Long>{

}
