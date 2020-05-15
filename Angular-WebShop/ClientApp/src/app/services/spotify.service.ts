import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

Injectable()
export class SpotifyService {
  private searchUrl: string;
  constructor(private _http: HttpClient) {

  }

  searchMusic(searchStr: string, type = 'album') {
    this.searchUrl = "https://api.spotify.com/v1/search?q=" + searchStr + "&offset=0&limit=20&type=" + type;
    return this._http.get(this.searchUrl);
  }
}
