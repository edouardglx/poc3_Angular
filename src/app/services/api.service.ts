import { Anime } from '@/Anime';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl_getAllAnimes: string = 'https://anime-db.p.rapidapi.com/anime';
  private apiUrl_getById: string = this.apiUrl_getAllAnimes + '/by-id/';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': environment.apiKey,
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

  getAnimes(page: string, size: string): Observable<Anime[]> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http
      .get<{ meta: any; data: Anime[] }>(this.apiUrl_getAllAnimes, {
        headers: this.headers,
        params,
      })
      .pipe(map((response) => response.data));
  }

  getSpecificAnime(id: string): Observable<Anime> {
    return this.http
      .get<Anime>(this.apiUrl_getById + id, {
        headers: this.headers,
      })
      .pipe(
        catchError((error) => {
          console.error('Une erreur est survenue :', error);
          throw error;
        })
      );
  }
}
