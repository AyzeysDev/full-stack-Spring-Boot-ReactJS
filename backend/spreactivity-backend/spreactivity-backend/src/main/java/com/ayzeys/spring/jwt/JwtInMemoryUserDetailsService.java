package com.ayzeys.spring.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

  static {
    inMemoryUserList.add(new JwtUserDetails(1L, "ayzeys",
        "$2a$10$yaZ4JeBEMdAES4xyxhogqeI/TpN.9zEK3VI12DDGuekL3GiyLYOKC", "ROLE_USER_2"));
    inMemoryUserList.add(new JwtUserDetails(2L, "aravind",
            "$2a$10$oyeEKYAwa7dF4iU5KQClXOx3QKQIHHZiaG/wQG.VGD8Ifnl2Sr1iy", "ROLE_USER_2"));
    inMemoryUserList.add(new JwtUserDetails(3L, "akayzeys",
            "$2a$10$UJYM/uGQ7ywnrASwdMoVJeRmzjPwTLCBqM9xaV//skUk58yJOc5Q2", "ROLE_USER_2"));
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
        .filter(user -> user.getUsername().equals(username)).findFirst();

    if (!findFirst.isPresent()) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    return findFirst.get();
  }

}


