package com.kannan.TodoApp.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HelloWorldController {

	// @RequestMapping(path="/hello-world",method=RequestMethod.GET) OR
	@GetMapping(path="/hello-world")
	public String printHelloWorld(){
		return "Hello Wolrd Program";
	}
	
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean printHelloWorldBean(){
		return new HelloWorldBean("Hello World Bean Successful");
	}
	
	
	@GetMapping(path="/hello-world-bean/{name}")
	public HelloWorldBean printHelloWorldBean(@PathVariable String name){
		return new HelloWorldBean(String.format("Hello , %s",name));
	}
	
}
