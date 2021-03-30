package com.ayzeys.spring.spreactivitybackend;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {
	List<Activity> findByUsername(String username);
}
