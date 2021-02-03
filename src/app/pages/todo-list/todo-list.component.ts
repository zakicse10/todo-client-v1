import { Component } from '@angular/core';
import { TodoItem } from '../../models/TodoItem'; 

@Component({
    selector: 'td-todo-list',
    templateUrl: './todo-list.component.html'
})
export class TodoListComponent {

    todoItems: TodoItem[];

    constructor() {
        this.todoItems = new Array();
        this.addToList('First ToDO!', 'A lot of things to be done!', false);
        this.addToList('Bootstrap learning', 'Need more knowledge of bootstrap', false);
    }

    addToList(title: string, details: string, isDone: boolean): void {
        var item = new TodoItem(title, details, isDone, null, null);
        this.todoItems.push(item)
    }

    addItemToList(item: TodoItem): void {
        this.todoItems.push(item);
    }
}