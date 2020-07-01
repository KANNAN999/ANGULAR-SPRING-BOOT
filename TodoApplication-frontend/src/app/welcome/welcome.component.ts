import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../Service/Data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  userName: string;
  constructor(private router: ActivatedRoute,
    private service: WelcomeDataService) { }
  private messageFromService: string;
  ngOnInit() {
    this.userName = this.router.snapshot.params["userName"];

  }

  getWelcomeMessage() {


     console.log(this.service.executeHelloWorldBeanService());
     this.service.executeHelloWorldBeanService().subscribe(
       response => this.handleSuccessfulResponse(response)
    );
    
 }


 getWelcomeMessageWithPathVariable(){
  this.service.executeHelloWorldBeanServiceWithPathVariable(this.userName).subscribe(
    response => this.handleSuccessfulResponse(response)
  );
 }

  handleSuccessfulResponse(response) {
    this.messageFromService = response.msg;
    console.log(response);
    console.log(this.messageFromService);
  }

}
