package com.freenety.chatservice.user;

import com.freenety.chatservice.user.UserRepository;
import com.freenety.chatservice.user.Status;
import com.freenety.chatservice.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;

    public void saveUser(User user){
        user.setStatus(Status.ONLINE);
        repository.save(user);
    }
    public void disconnect(User user){
        var storedUser = repository.findById(user.getId())
                .orElse(null);
        if (storedUser!=null){
            storedUser.setStatus(Status.OFFLINE);
            repository.save(storedUser);
        }
    }

    public List<User> findConnectedUsers(){
        return repository.findAllByStatus(Status.ONLINE);
    }
}
