import { Injectable } from '@angular/core';
import { TodoItem } from '../models/TodoItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { JsonToModelService } from './json-to-model.service';
import { LocalStorageService } from './local-storage.service';
import * as AppConstants from '../common/constants';
import { config } from '../../appConfig';

@Injectable({
    providedIn: 'root'
})
export class TodoItemsService {

    useServer: boolean = true;

    items: TodoItem[];

    public constructor(private httpClient: HttpClient,
        private jsonToModel: JsonToModelService,
        private localStorageService: LocalStorageService) {
    }

    private getCommonHeaders(): HttpHeaders {
        return new HttpHeaders({
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        });
    }

    getTodos(): Observable<TodoItem[]> {
        return this.useServer ? this.getTodoFromServer() : this.getFakeTodos();
    }

    private getTodoFromServer(): Observable<TodoItem[]> {
        var url = config.apiServerUrl + 'api/todos';
        var result = this.httpClient.get<TodoItem[]>(url);
        this.populateLocalCache(result);
        return result;
    }

    private getFromLocalStorage(): Observable<TodoItem[]> {
        let localStorageItems = this.localStorageService.getItem(AppConstants.LocalStorageKeyTodoItems);
        if (localStorageItems) {
            let todoItems = new Array<TodoItem>();
            localStorageItems.forEach(item => {
                todoItems.push(this.jsonToModel.convertTodo(item));
            });
            return of(todoItems);
        }

        return null;
    }

    private saveInLocalStorage(todos: TodoItem[]) {
        this.localStorageService.setItem(AppConstants.LocalStorageKeyTodoItems, todos);
    }

    private populateLocalCache(result: Observable<TodoItem[]>): void {
        result.subscribe(itemsCol => {
            this.items = itemsCol;
            this.saveInLocalStorage(itemsCol);
        }, error => {
            this.items = null;
            console.log(`Failed to populate local cache. Error: ${error}`);
        });
    }

    getTodoFromId(id: number): TodoItem {
        if (this.items != null && this.items.length > 1)
            return this.items.find(todo => todo.Id == id);

        return new TodoItem({});
    }

    private getFakeTodos(): Observable<TodoItem[]> {
        let todoitems = new Array<TodoItem>();
        fetch('./assets/DataStore.json')
            .then(res => res.json())
            .then(json => {
                json.forEach(element => {
                    todoitems.push(this.jsonToModel.convertTodo(element));
                });
                console.log('inside promise', todoitems);
            });

        console.log('outside promise', todoitems);
        var result = of(todoitems);
        this.populateLocalCache(result);
        return result;
    }
}

