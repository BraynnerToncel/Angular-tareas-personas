import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/interfaces/todos.interfaces';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent {
  public todos?: Todo[];
  private todosService = inject(TodosService);
  private todosSubscription: Subscription;

  constructor() {
    this.todosSubscription = this.todosService.getTodos().subscribe((todos) => {
      this.todos = todos;
      console.log(todos)
    });
  }

  ngDestroy() {
    this.todosSubscription.unsubscribe();
  }
}
