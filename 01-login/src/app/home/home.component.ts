import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { EigenAPIService } from 'app/eigen-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService,private data:EigenAPIService) { }

  ngOnInit() {
  }


  onClickMe() {
    this.data.getOwnAPIData().subscribe((res)=>{
      console.log(res)
    });
  }
}
