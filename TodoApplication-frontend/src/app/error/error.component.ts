import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
errorMessage="PAGE NOT FOUND ERROR : 404"
  constructor() { }

  ngOnInit() {
  }

}
