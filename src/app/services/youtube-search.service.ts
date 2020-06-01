import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeSearchService {

  apiKey: string = 'AIzaSyDhqMQ5EC7zEMeECcmqYby_HcZ2UpRU_5U';

  constructor(private httpClient: HttpClient) { }
  search(param: any): Observable<any> {
    let searchStr = param.searchStr;
    let pageToken = param.pageToken;
    let type = param.type;
    let url = 'https://www.googleapis.com/youtube/v3/search?key='+this.apiKey+'&part=id,snippet&q='+searchStr+
    '&type='+type+'&pageToken='+pageToken;
    
    return this.httpClient.get<any>(url).pipe(map(searchResults => searchResults))
  }
}
