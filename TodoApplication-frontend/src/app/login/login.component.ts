import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationServiceService } from '../Service/hardcoded-authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = "kannan";
  password = "";
  invalid: boolean;
  errorMessage = "Invalid Credentials"
  constructor(private router:Router,private service:HardcodedAuthenticationServiceService) { }

  ngOnInit() {
  }

resetFields(){
  this.userName="";
  this.password="";
  console.log("reset called");
}
  handleLogin() {

    if (this.service.authenticate(this.userName,this.password)) {
      this.invalid = false;
      this.router.navigate(["welcome",this.userName])

    }
    else {
      this.invalid = true;
    }

  }

}
