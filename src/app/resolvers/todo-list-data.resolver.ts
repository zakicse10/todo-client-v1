import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ITodoItem } from '../models/TodoItem';
import { TodoItemsService } from '../services/todo-items.service';

@Injectable({
  providedIn: 'root'
})
export class TodoListDataResolver implements Resolve<ITodoItem[]> {

  constructor(private todoService: TodoItemsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITodoItem[]> {

    return this.todoService.getTodos()
      .pipe(
        catchError((err) => {
          console.log('Error in todo-list resolver. Error' + err);
          return of([]);
        })
      )
  }
}
