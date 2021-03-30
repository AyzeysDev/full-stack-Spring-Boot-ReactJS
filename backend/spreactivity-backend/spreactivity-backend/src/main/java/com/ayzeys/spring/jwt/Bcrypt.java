package com.ayzeys.spring.jwt;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Bcrypt {

	public static void main(String[] args) {
		
		BCryptPasswordEncoder bc = new BCryptPasswordEncoder();
		for (int i=0; i<10; i++) {
			String n = bc.encode("password@123!");
			System.out.println(n);
		}

	}

}
