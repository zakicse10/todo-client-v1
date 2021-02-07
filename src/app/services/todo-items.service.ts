import { Injectable } from '@angular/core'
import { TodoItem } from '../models/TodoItem'

@Injectable({
    providedIn: 'root'
})
export class TodoItemsService {

    getTodos(): TodoItem[] {
        return [ 
        {
            Title : 'First todo',
            Description : 'A lot of things to be done yet',
            IsDone : false,
            AddedOn : new Date('2020-12-28'),
            FinishedOn : null
        },
        {
            Title : 'Learn about angular basics',
            Description : 'Finish the Angular Basic cource by Deborah Kurata',
            IsDone : false,
            AddedOn : new Date('2021-2-07'),
            FinishedOn : null
        },
        {
            Title : 'Creating service and injecting it',
            Description : 'Learn how to create a service, register it and inject it in the required components',
            IsDone : true,
            AddedOn : new Date('2020-12-28'),
            FinishedOn : new Date('2021-02-07')
        },
        {
            Title : 'Nesting Components',
            Description : 'Add a TodoItem details component',
            IsDone : false,
            AddedOn : new Date('2021-02-07'),
            FinishedOn : null
        },
        {
            Title : 'Custom pipe',
            Description : 'Need to create some custom pipes to format the date time',
            IsDone : false,
            AddedOn : new Date('2021-2-07'),
            FinishedOn : null
        }
    ];
    }
}