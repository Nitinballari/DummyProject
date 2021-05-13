import { Component, Inject, OnInit, Optional } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit {
  fromDialog: string;
  fromPage: string;
  constructor(
    public dialogRef: MatDialogRef<AlarmComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.fromPage = data.datafromtodo;
    //alert(data.datafromtodo)
  }

  ngOnInit(): void {
  }
  onsubmit(userdata: NgForm) { }
  
  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.fromDialog });
  }
}