import { Injectable } from '@angular/core';
import { TodoItem } from '../models/TodoItem';

@Injectable({
  providedIn: 'root'
})
export class JsonToModelService {

  constructor() {
  }

  convertTodo(jsonObj: any): TodoItem {
    let todo = new TodoItem({});
    if (typeof jsonObj != 'object') {
      jsonObj = JSON.parse(jsonObj);
    }
    Object.assign(todo, jsonObj);
    return todo;
  }


}
