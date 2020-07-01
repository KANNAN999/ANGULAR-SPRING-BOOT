import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../Service/Data/todo-data.service';
import { Router } from '@angular/router';


export class Todo {

  constructor(public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date) { }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  constructor(private todoService: TodoDataService,
    private router:Router) { }

  todos: Todo[];
  message:String;

  ngOnInit() {

    this.refreshTodos();

  }

  refreshTodos(){
this.todoService.retriveAllTodos("kannan").subscribe(

      response => {
        console.log(response);
        this.todos = response;
      }

    )

  }


  updateTodo(id){
    this.router.navigate(["update",id])
  }


  deleteTodo(id){
    this.todoService.deleteTodoById("kannan",id).subscribe(
      response=>{
        console.log(response);
        this.message=`Todo With Id : ${id} Deleted Successfully`; 
        this.refreshTodos();
      }

    )
  }


  addTodo(){
    this.router.navigate(["update",-1])
  }



}
