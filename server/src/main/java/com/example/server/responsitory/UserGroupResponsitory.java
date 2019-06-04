package com.example.server.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.server.entity.UserGroup;

public interface UserGroupResponsitory extends JpaRepository<UserGroup, Long> {

}
