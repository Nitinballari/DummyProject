import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Useremail = "nitin@gmail.com";
  Userpassword = "nitin";
  wrongEmail = false;
  wrongPassword = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private router: Router) { }
  ngOnInit(): void {

  }

  onsubmit(userlogin: NgForm) {


    console.log(userlogin.value.email1);
    if (userlogin.value.email1 == this.Useremail && userlogin.value.password1 == this.Userpassword) {
      console.log("t");
      this.router.navigate(['/home']);
    } else if (userlogin.value.email1 == this.Useremail) {
      console.log("only email is correct");
      this.wrongPassword = true;

    } else {
      this.wrongEmail = true;
      this.wrongPassword = true;
      userlogin.reset();
    }
  }





}