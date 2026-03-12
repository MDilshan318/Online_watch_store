package com.luxurytime.controller;

import com.luxurytime.entity.User;
import com.luxurytime.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {
        Map<String, String> response = new HashMap<>();

        if (userRepository.existsByUsername(user.getUsername())) {
            response.put("error", "Username is already taken.");
            return ResponseEntity.badRequest().body(response);
        }

        if (userRepository.existsByEmail(user.getEmail())) {
            response.put("error", "Email is already in use.");
            return ResponseEntity.badRequest().body(response);
        }

        userRepository.save(user);

        response.put("message", "User registered successfully");
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        Map<String, String> response = new HashMap<>();
        
        Optional<User> userOpt = userRepository.findByEmail(loginRequest.getEmail());
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            if (user.getPassword().equals(loginRequest.getPassword())) {
                response.put("message", "Login successful");
                response.put("username", user.getUsername());
                return ResponseEntity.ok(response);
            }
        }
        
        response.put("error", "Invalid email or password");
        return ResponseEntity.status(401).body(response);
    }
}
