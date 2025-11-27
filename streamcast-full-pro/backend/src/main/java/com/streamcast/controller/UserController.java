package com.streamcast.controller;

import com.streamcast.model.User;
import com.streamcast.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping
  public List<User> list() {
    return userService.findAll();
  }

  @PostMapping
  public User create(@RequestBody User u) {
    return userService.save(u);
  }
}
