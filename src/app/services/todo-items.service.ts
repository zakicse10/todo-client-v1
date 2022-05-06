import { Injectable } from '@angular/core';
import { TodoItem } from '../models/TodoItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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

        return new TodoItem({});
    }

    getFakeTodos(): Observable<TodoItem[]> {
        let todoitems: Array<TodoItem>;
        todoitems = [{
            Id: 1,
            Title: 'Need to learn Javascript properly',
            Description: 'Finish the Udemy course and complete the sample projects. Then make something yourself',
            AddedOnUtc: new Date(2022, 12, 23),
            FinishedOnUtc: new Date(2022, 12, 25),
            IsDone: false
        }, {
            Id: 2,
            Title: 'Need to learn Angular',
            Description: 'FInish the PluralSight course, then go through the Udemy course for more details. Create the PokerFace project. Find weak spots.',
            AddedOnUtc: new Date(2022, 12, 23),
            FinishedOnUtc: new Date(2022, 12, 25),
            IsDone: false
        }, {
            Id: 3,
            Title: 'Learn about Angular RxJS',
            Description: 'COmplete the course for Angular RxJS library from PluralSight',
            AddedOnUtc: new Date(2022, 12, 23),
            FinishedOnUtc: new Date(2022, 12, 25),
            IsDone: false
        }]

        return of(todoitems);
    }
}