import { Injectable } from '@angular/core'
import { TodoItem } from '../models/TodoItem'

@Injectable({
    providedIn: 'root'
})
export class TodoItemsService {

    items: TodoItem[];

    public constructor() {
        this.items = [ 
            {
                Id: 1,
                Title : 'First todo',
                Description : 'A lot of things to be done yet',
                IsDone : false,
                AddedOn : new Date('2020-12-28'),
                FinishedOn : null
            },
            {
                Id: 2,
                Title : 'Learn about angular basics',
                Description : 'Finish the Angular Basic cource by Deborah Kurata',
                IsDone : false,
                AddedOn : new Date('2021-2-07'),
                FinishedOn : null
            },
            {
                Id: 3,
                Title : 'Creating service and injecting it',
                Description : 'Learn how to create a service, register it and inject it in the required components',
                IsDone : true,
                AddedOn : new Date('2020-12-28'),
                FinishedOn : new Date('2021-02-07')
            },
            {
                Id: 4,
                Title : 'Nesting Components',
                Description : 'Add a TodoItem details component',
                IsDone : false,
                AddedOn : new Date('2021-02-07'),
                FinishedOn : null
            },
            {
                Id: 5,
                Title : 'Custom pipe',
                Description : 'Need to create some custom pipes to format the date time',
                IsDone : false,
                AddedOn : new Date('2021-2-07'),
                FinishedOn : null
            }
        ];
    }

    getTodos(): TodoItem[] {
        return this.items;
    }

    getTodoFromId(id: number): TodoItem {
        return this.items.find(todo => todo.Id == id);
    }
}