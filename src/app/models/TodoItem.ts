export class TodoItem {
    Title: string;
    Description: string;
    IsDone: boolean;
    AddedOn: Date;
    FinishedOn: Date;

    constructor(title: string, description: string, isDone: boolean, addedOn: Date, finishedOn: Date) {
        this.Title = title;
        this.Description = description;
        this.IsDone = isDone;
        this.AddedOn = addedOn;
        this.FinishedOn = finishedOn;
    }
}