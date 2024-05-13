package com.freenety.chatservice.user;

import com.freenety.chatservice.user.UserService;
import com.freenety.chatservice.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService service;

//    @MessageMapping("/user.addUser")
    @SendTo("/user/topic")
    public User addUser(@Payload User user){
        service.saveUser(user);
        return user;
    }

    @MessageMapping("/user.addUser")
    @SendTo("/user/topic")
    public User disconnect(@Payload User user){
        service.disconnect(user);
        return user;
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> findConnectedUser(){
        return ResponseEntity.ok(service.findConnectedUsers());
    }

}
