import { Component, OnInit } from '@angular/core';
import {YoutubeSearchService} from '../services/youtube-search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  payload = {
    type: '',
    pageToken: '',
    searchStr: ''
  }
  searchResults: any;

  constructor(private youtubeService: YoutubeSearchService) { }

  ngOnInit() {
  }

  filter(event){
    this.payload.type = event.target.value;
    this.search();
  }
  pagination(param) {
    if(param === 'next') {
      this.payload.pageToken = this.searchResults.nextPageToken;
    } else if (param === 'previous') {
      this.payload.pageToken = this.searchResults.prevPageToken;
    }
    this.search();
  }
  async search() {
    console.log(this.payload);
    let result = await this.youtubeService.search(this.payload).toPromise();
    this.searchResults = result;

    console.log(this.searchResults);
  }

}
