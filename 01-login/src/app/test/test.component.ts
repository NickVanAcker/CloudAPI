import { Component, OnInit } from '@angular/core';
import { EigenAPIService, ILeerkrachtData } from 'app/eigen-api.service';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  gender: SelectItem[];
  fname :string;
  lname:string;
  email:string;
  ip:string;
  straat:string
  number:string;
  postcode:number;
  selectedGender: Gender;

  leerkrachtarray: ILeerkrachtData[] = [];


  constructor(private data:EigenAPIService) { 
    this.gender = [
      {label:'Select Gender', value:null},
      {label:'Male', value:{id:1, name: 'Male'}},
      {label:'Female', value:{id:2, name: 'Female'}}
  ];
  }

  ngOnInit() {
  }


  onClickMe(){
    var newLK: ILeerkrachtData = {
      firstName:this.fname,
      lastName:this.lname,
      email:this.email,
      gender:this.selectedGender.name,
      ipAddress:this.ip,
      street:this.straat,
      number:this.number,
      postcode:this.postcode
  }

   console.log(newLK)
   this.data.addLeerkracht(newLK).subscribe(lk => this.leerkrachtarray.push(lk))
  }

}

interface Gender {
  name: string;
}
