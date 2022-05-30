import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'td-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  addForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      title: ['add title', Validators.required],
      description: ['add details', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form);
  }

}
