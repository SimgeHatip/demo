package com.example.demo.repository;

import com.example.demo.domain.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, ObjectId> {

    @Query("{ '$or': [ { 'username': ?0 }, { 'email': ?0 } ] }")
    Optional<User> findByUsernameOrEmail(String usernameOrEmail);
}
