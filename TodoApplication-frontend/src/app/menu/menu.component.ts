import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationServiceService } from '../Service/hardcoded-authentication-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn : boolean;
  constructor(public service:HardcodedAuthenticationServiceService) { }

  ngOnInit() {
    
  }

  abc(){

  }
  

}
