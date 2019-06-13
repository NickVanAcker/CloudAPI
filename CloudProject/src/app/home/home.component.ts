import { Component, OnInit } from '@angular/core';
import {YoutubeAPIService} from '../youtube-api.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items : any[];
  commenitems : any[];
  commmentText: string;
  condition :boolean

  constructor(private YTService: YoutubeAPIService) { }

  ngOnInit() {
    
}

  handleClick() {
    this.YTService.GetChannelData(this.commmentText).subscribe((res) => {
      this.items = res.items  
      this.condition = true
    },(error) =>{
      // error opvanging TODO
    });

    this.YTService.GetCommentData(10).subscribe((res)=> {
      this.commenitems = res.items 
    });
}

}
