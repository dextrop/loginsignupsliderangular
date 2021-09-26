import { Component, OnInit } from '@angular/core';
declare var initThemeSlider;

@Component({
  selector: 'app-loginsignupsliderlayout',
  templateUrl: './loginsignupsliderlayout.component.html',
  styleUrls: ['./loginsignupsliderlayout.component.css']
})
export class LoginsignupsliderlayoutComponent implements OnInit {
  email = "";
  password = "";
  
  login_email = ""
  login_password = ""
  signup_name = ""
  signup_email = "" 
  signup_password = ""

  constructor() { }

  ngOnInit(): void {
    initThemeSlider();
  }

  login() {
    if (this.login_email.length < 1) {
      alert("Signup Name cannot be left empty");
      return false;
    }

    if (this.login_password.length < 7) {
      alert("Password should be greater than 6 character");
      return false;
    }
    let login_data = {
      "email": this.login_email,
      "password": this.login_password,
    }
    console.log(login_data);
  }

  signup() {
    if (this.signup_name.length < 1) {
      alert("Signup Name cannot be left empty");
      return false;
    }

    if (this.signup_email.length < 1) {
      alert("Signup Name cannot be left empty");
      return false;
    }

    if (this.signup_password.length < 7) {
      alert("Password should be greater than 6 character");
      return false;
    }

    let signup_data = {
      "email": this.signup_email,
      "password": this.signup_password,
      "name": this.signup_name,
    }

    console.log(signup_data);
  }
}
