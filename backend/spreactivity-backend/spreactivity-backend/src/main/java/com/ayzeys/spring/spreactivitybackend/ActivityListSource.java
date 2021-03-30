package com.ayzeys.spring.spreactivitybackend;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ActivityListSource {
	
	@Autowired
	private ActivityRepository activityRepository;
	
	@GetMapping("/users/{username}/list")
	public List<Activity> getAllActivities(@PathVariable String username){
		return activityRepository.findByUsername(username);
	}

	@GetMapping("/users/{username}/list/{id}")
	public Activity getActivity(@PathVariable String username, @PathVariable long id){
		return activityRepository.findById(id).get();
	}

	@DeleteMapping("/users/{username}/list/{id}")
	public ResponseEntity<Void> deleteActivity(
			@PathVariable String username, @PathVariable long id) {

		activityRepository.deleteById(id);

		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/users/{username}/list/{id}")
	public ResponseEntity<Activity> updateActivity(
			@PathVariable String username,
			@PathVariable long id, @RequestBody Activity activity){
		
		activity.setUsername(username);
		
		Activity activityUpdated = activityRepository.save(activity);
		
		return new ResponseEntity<Activity>(activityUpdated, HttpStatus.OK);
	}
	
	@PostMapping("/users/{username}/list")
	public ResponseEntity<Void> createActivity(
			@PathVariable String username, @RequestBody Activity activity){
		
		activity.setUsername(username);
		
		Activity createdActivity = activityRepository.save(activity);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdActivity.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}

}
