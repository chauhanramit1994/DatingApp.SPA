import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(){
 this.getUser();
  }

  getUser(){
  this.http.get("http://localhost:50903/api/User").subscribe(response =>{
   this.userData = response;
   debugger;
   error =>{
     console.log(error);
   }
  });

  }

}
