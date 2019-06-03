import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  menuitems: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.menuitems = [
      {label: 'Home', icon: 'fa fa-fw fa-bar-chart',routerLink:['/home']},
      {label: 'Test Page', icon: 'pi pi-question',routerLink:['/test']},
  ];
  }

}
