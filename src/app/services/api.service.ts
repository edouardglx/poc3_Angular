import { Anime } from '@/Anime';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl_getAllAnimes: string = 'https://anime-db.p.rapidapi.com/anime';
  private apiUrl_getById: string = this.apiUrl_getAllAnimes + '/by-id/';

  options = {
    header: new HttpHeaders({
      'X-RapidAPI-Key': '7143b32c4bmshf27bf859b5ab0a3p1b8e7fjsnb504c13fe516',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
    }),
    responseType: 'json',
    observe: 'body',
  };

  constructor(private http: HttpClient) {}
}
