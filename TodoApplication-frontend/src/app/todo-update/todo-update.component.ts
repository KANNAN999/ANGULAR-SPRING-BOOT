import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../Service/Data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {
  id: number;
  todo: Todo
  constructor(private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.todo = new Todo(this.id, "", false, new Date());

    if (this.id != -1) {
      this.todoService.retriveTodoById("kannan", this.id).subscribe(
        response => {
          this.todo = response;
        }

      );
    }
  }


  saveTodo() {
    if(this.id==-1){
      //create Todo
      this.todoService.createTodo("kannan",this.todo).subscribe(
      response=>{
        console.log(response)
        this.router.navigate(["todos"])
      }
      );

    }
    else{
      //Update Todo
    this.todoService.updateTodoById("kannan", this.id, this.todo).subscribe(
      response => {
        console.log(response)
        this.router.navigate(["todos"])

      }
    );
  }
  }


}
