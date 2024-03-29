import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { TestComponent } from './common/test.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoDetails } from './pages/todo-details/todo-details.component';
import { TodoAddComponent } from './pages/todo-add/todo-add.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { TodoListDataResolver } from './resolvers/todo-list-data.resolver';

@NgModule({
  declarations: [
    AppComponent, TestComponent, TodoListComponent, TodoDetails, TodoAddComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'todos',
        component: TodoListComponent,
        resolve: {
          todolist: TodoListDataResolver
        }
      },
      { path: 'todo-add', component: TodoAddComponent },
      { path: 'todo/:id', component: TodoDetails },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
