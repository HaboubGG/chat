package com.freenety.chatservice.user;

import com.freenety.chatservice.user.Status;
import com.freenety.chatservice.user.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {

    List<User> findAllByStatus(Status online);
}
