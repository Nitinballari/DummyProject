import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlarmComponent } from './alarm/alarm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const routes: Route[] = [
  {
    path: "", redirectTo: "/login", pathMatch: "full"

  },

  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent,
  


  },
  {
    path: "todolist",
    component: TodolistComponent
  },
  {
    path: "calculator",
    component: CalculatorComponent
  },

  {
    path: "**",
    component: PageNotFoundComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    CalculatorComponent,
    PageNotFoundComponent,
    LoginComponent,
    HomeComponent,
    AlarmComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
