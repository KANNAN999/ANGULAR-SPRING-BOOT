package com.kannan.TodoApp.todos;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {

	
	private static List<Todos> todoList=new ArrayList<>();
	private static long counter=0;
	
	static{
		todoList.add(new Todos(++counter,"kannan","Learn About Angular", false, new Date()));
		todoList.add(new Todos(++counter,"kannan", "Learn About Spring Boot", false, new Date()));
		todoList.add(new Todos(++counter,"kannan", "Learn About Data Structures And Algorithms", false, new Date()));
		todoList.add(new Todos(++counter,"kannan", "Start Coding on CODE FORCES", false, new Date()));
		todoList.add(new Todos(++counter,"kannan", "Create Projects", false, new Date()));
		
	}

		public List<Todos> findAll() {
		// TODO Auto-generated method stub
		return todoList;
	}
		
		
		public Todos deleteTodoById(long id){
			Todos todo=findTodoById(id);
			if(todo==null)
				return null;
			
			if(todoList.remove(todo))
				return todo;
			
			return todo;
					
		}
		
		public Todos findTodoById(long id){
			
			for(Todos todo:todoList){
				if(todo.getId()==id){
					return todo;
				}
		
			}
			return null;
			
		}

		
		public Todos save(Todos todo){
			if(todo.getId()==-1 || todo.getId()==0){
				todo.setId(++counter);
				todoList.add(todo);
			}else{
				deleteTodoById(todo.getId());
				todoList.add(todo);
			}
			return todo;
		}
}
