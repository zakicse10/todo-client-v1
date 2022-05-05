import { Injectable } from '@angular/core';
import { TodoItem } from '../models/TodoItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TodoItemsService {

    items: TodoItem[];

    public constructor(public httpClient: HttpClient) {
    }

    getCommonHeaders(): HttpHeaders {
        return new HttpHeaders({
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        });
    }

    getTodos(): Observable<TodoItem[]> {
        var url = "https://localhost:44377/api/todos";
        var result = this.httpClient.get<TodoItem[]>(url);
        this.populateLocalCache(result);
        return result;
    }

    populateLocalCache(result: Observable<TodoItem[]>): void {
        result.subscribe(itemsCol => {
            this.items = itemsCol;
        }, error => {
            this.items = null;
        });
    }

    getTodoFromId(id: number): TodoItem {
        if (this.items != null && this.items.length > 1)
            return this.items.find(todo => todo.Id == id);

        return new TodoItem();
    }
}