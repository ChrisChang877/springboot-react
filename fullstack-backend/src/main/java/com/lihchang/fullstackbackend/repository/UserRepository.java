package com.lihchang.fullstackbackend.repository;

import com.lihchang.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
