import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.subscribe((data: any) => {
            // console.log('Route data:' + JSON.stringify(data));
            this.todoItems = data.todolist;
        });
    }

    selected(todo: TodoItem): void {
        this.selectedItem = todo;
    }
}