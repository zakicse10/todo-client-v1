import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { TodoItem } from "src/app/models/TodoItem";
import { TodoItemsService } from "src/app/services/todo-items.service";


@Component({
    selector: 'td-todo-details',
    templateUrl: './todo-details.component.html'
})
export class TodoDetails implements OnInit {

    todo: TodoItem;

    constructor(
        private activatedRoute : ActivatedRoute, 
        private todoItemService: TodoItemsService) {
    }
    
    ngOnInit(): void {
        let id = +this.activatedRoute.snapshot.paramMap.get('id');
        var item = this.todoItemService.getTodoFromId(id);
        this.todo = item;
    }


}