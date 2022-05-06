import { Component, OnInit } from '@angular/core';
import { TodoItemsService } from 'src/app/services/todo-items.service';
import { TodoItem } from '../../models/TodoItem';

@Component({
    selector: 'td-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    todoItems: any[];
    selectedItem: TodoItem;

    constructor(private todoService: TodoItemsService) {
    }

    ngOnInit() {
        this.todoService.getFakeTodos().subscribe(result => {
            var items = result;
            this.todoItems = items;
        }, error => {
            console.log("Failed to get todo items. Error: " + error)
        });
    }

    selected(todo: TodoItem): void {
        this.selectedItem = todo;
    }
}