package com.kannan.TodoApp.todos;

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

//REFER VIDEO 67 


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TodoController {

	@Autowired
	private TodoHardcodedService todoHardCodedService;
	
	
	//Retrive all the todos
	@GetMapping(path="/users/{userName}/todos")
	public List<Todos> getAllTodos(@PathVariable String userName){
		//System.out.println("ENTERED INSIDE METHOD");
		List<Todos> retList= todoHardCodedService.findAll();
		//System.out.println(retList);
		return retList;
	}
	
	
	//Retrive a single todo
	@GetMapping(path="/users/{userName}/todos/{id}")
	public Todos getTodoById(@PathVariable String userName,@PathVariable long id){
		return todoHardCodedService.findTodoById(id);
	}
	
	
	
	//Update aTodo
	@PutMapping(path="/users/{userName}/todos/{id}")
	public ResponseEntity<Todos> updateTodo(@PathVariable String userName,@PathVariable long id
			,@RequestBody Todos todo){
		Todos retUpdatedTodo=todoHardCodedService.save(todo);
		
		return new ResponseEntity<Todos>(HttpStatus.OK);
	}
	
	
	//Create a Todo
		@PostMapping(path="/users/{userName}/todos")
		public ResponseEntity<Void> createTodo(@PathVariable String userName
				,@RequestBody Todos todo){
			Todos retCreatedTodo=todoHardCodedService.save(todo);
			
			//get URI and append it with new Todo's id and return the complete URI
	URI uri=ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").
			buildAndExpand(retCreatedTodo.getId()).toUri();
			
			return ResponseEntity.created(uri).build();
		}
	
	
	
	
	//Delete a Todo
	@DeleteMapping(path="/users/{userName}/todos/{id}")
	public ResponseEntity<Void> deleteTodoById(@PathVariable String userName,@PathVariable long id){
		
		Todos todo=todoHardCodedService.deleteTodoById(id);
		
		if(todo!=null)
			return ResponseEntity.noContent().build();
		
		
			return ResponseEntity.notFound().build();
		
	}
	
	
}
