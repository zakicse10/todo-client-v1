import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { TodoItem } from 'src/app/models/TodoItem';
import { TodoItemsService } from 'src/app/services/todo-items.service';

@Component({
  selector: 'td-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit, OnDestroy {

  addForm: FormGroup;
  error: Subject<string>;
  message: string = null;
  subscription: Subscription;

  constructor(private fb: FormBuilder, private todoService: TodoItemsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]]
    });
    this.error = new Subject<string>();
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) {
      this.error.next('Data is invalid');
      return;
    }

    this.subscription = this.todoService.addTodo(new TodoItem(
      {
        title: this.addForm.controls['title'].value,
        description: this.addForm.controls['description'].value
      }))
      .subscribe(
        () => {
          this.addForm.setValue({ title: '', description: '' });
          this.addForm.markAsPristine();
          this.toastr.success('Added successfully!');
        },
        (err) => {
          console.log('Failed to add todo. Error: ' + err);
          this.error.next('Failed to add todo');
        }
      )

  }

  check() {
    console.log(this.addForm);
    //this.message = `Form status is: ${this.addForm.status}`
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
