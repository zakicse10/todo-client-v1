import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponent } from './common/test.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoDetails } from './pages/todo-details/todo-details.component';
import { TodoAddComponent } from './pages/todo-add/todo-add.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent, TestComponent, TodoListComponent, TodoDetails, TodoAddComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule, FormsModule,  HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'todos', component: TodoListComponent },
      { path: 'todo/:id', component: TodoDetails},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
