import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCardService {



  private CardsUrl = 'https://jsonplaceholder.typicode.com/photos';  // URL to web api


  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getCards () {
    return this.http.get(this.CardsUrl);
  }
}
