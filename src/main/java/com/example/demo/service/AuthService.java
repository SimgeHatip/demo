package com.example.demo.service;

import com.example.demo.dto.LoginDto;
import com.example.demo.dto.UserDto;

public interface AuthService {
    String login(LoginDto loginDto);

    String register(UserDto userDto);
}