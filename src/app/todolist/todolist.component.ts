import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlarmComponent } from '../alarm/alarm.component';

@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todolist: any = [];
  dialogValue;
  count = 0;


  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }


  onsubmit(userdata: NgForm) {
    this.count = this.count + 1;
    sessionStorage.setItem(JSON.stringify(this.count), userdata.value.usertodo);

    let newtodo = {

      id: this.count,
      work: userdata.value.usertodo,
      isChecked: false,

    };
    this.todolist.push(newtodo);
    // console.log("value"+userdata.value)
    //console.log("submit"+this.todolist)
    userdata.resetForm();
    //console.log("rrrrrrrrrrr"+this.usertodo)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AlarmComponent, {

      // data: { pageValue: this.sendValue }
      data: { datafromtodo: this.todolist.id }

    });

    //alert(this.todolist.work)
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.dialogValue = result.data;
      //alert(this.dialogValue);

    });

  }


  countdowndate = new Date("may 15,2021 12:30:55").getTime();
  demo;
  x = setInterval(() => {
    let now = new Date().getTime();
    let diff = this.countdowndate - now;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((diff % (1000 * 60)) / 1000)
    this.demo = days + "d : " + hours + "h : " + mins + "M : " + secs + "s";

  });



  deletechecked() {
    this.todolist = this.todolist.filter((t) => t.isChecked == false)
    console.log(this.todolist)

  }

  onchange() {
    console.log("on change" + this.todolist)
  }

}