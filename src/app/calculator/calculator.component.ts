import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { interval } from 'rxjs';
import { AlarmComponent } from '../alarm/alarm.component';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  
  constructor() { }
  ngOnInit(): void {


  }

exp='';
  firstNo = "0";
  firstOperand = null;
  operator = null;
  sencondNo = false;


  getNumber(num) {
    console.log(num);
    if (this.sencondNo) {
      this.firstNo = num;
      this.sencondNo = false;
    } else {
      this.firstNo === "0" ? this.firstNo = num : this.firstNo += num;
    }
    this.exp=this.exp+num;
  }
  getOpr(opr) {
    this.sencondNo = true;
    console.log(opr);

    if (this.firstOperand === null) {

      this.firstOperand = Number(this.firstNo)
    } else if (this.operator) {

      let result = this.calculation(this.operator, Number(this.firstNo));
      this.exp=result;
      this.firstNo = String(result);
      this.firstOperand = result;
    }

    this.operator = opr;
if(opr!=='='){
this.exp=this.exp+opr;}
    console.log(this.firstOperand);
  }
  calculation(op, secondOp) {
    switch (op) {
      case '+':
        return this.firstOperand += secondOp;
      case '-':
        return this.firstOperand -= secondOp;
      case '/':
        return this.firstOperand /= secondOp;
      case '*':
        return this.firstOperand *= secondOp;
      case '=':
        return secondOp;
    }

  }
  clear() {

    this.firstNo = "0";
    this.firstOperand = null;
    this.operator = null;
    this.sencondNo = false;
this.exp='';
  }

}







