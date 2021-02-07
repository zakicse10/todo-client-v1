import { Component, Input } from "@angular/core";
import { TodoItem } from "src/app/models/TodoItem";


@Component({
    selector: 'td-todo-details',
    templateUrl: './todo-details.component.html'
})
export class TodoDetails {

    @Input() todo: TodoItem;
    
}