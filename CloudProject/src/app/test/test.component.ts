import { Component, OnInit } from '@angular/core';
import { YoutubeAPIService } from '../youtube-api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  items : any[];
  constructor(private YTService: YoutubeAPIService) { }

  ngOnInit() {
  }
}
