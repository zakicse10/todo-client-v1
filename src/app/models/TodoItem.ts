export class TodoItem implements ITodoItem {
    Id: number;
    Title: string;
    Description: string;
    IsDone: boolean;
    AddedOnUtc: Date;
    FinishedOnUtc: Date;

    constructor(data: any) {
        this.Id = data?.id;
        this.Title = data?.title;
        this.Description = data?.description;
        this.AddedOnUtc = data?.addedOnUtc;
        this.IsDone = data?.isDone;
        this.FinishedOnUtc = data?.finishedOnUtc;
    }
}

export interface ITodoItem {
    Id: number;
    Title: string;
    Description: string;
    IsDone: boolean;
    AddedOnUtc: Date;
    FinishedOnUtc: Date;
}