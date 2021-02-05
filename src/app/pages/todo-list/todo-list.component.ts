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
        this.addToList2('First ToDO!', 'A lot of things to be done!', false, new Date());
        this.addToList2('Bootstrap learning', 'Need more knowledge of bootstrap', false, new Date());
        this.addToList2('PIPE example', 'The AddedOn is formated with PIPEs', false, new Date());
    }

    addToList2(title: string, details: string, isDone: boolean, addedOn: Date) { 
        var item = new TodoItem(title, details, isDone, addedOn, null);
        this.todoItems.push(item)
    }

    addToList1(title: string, details: string, isDone: boolean) {
        var item = new TodoItem(title, details, isDone, null, null);
        this.todoItems.push(item)
    }

    addItemToList(item: TodoItem): void {
        this.todoItems.push(item);
    }
}