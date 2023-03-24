import { Component, OnInit } from '@angular/core';
import { Anime } from '@/Anime';
import { ApiService } from '@/services/api.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  animeList: Anime[] = [];
  initialAnimeList: Anime[] = [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .getAnimes('1', '30')
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((animes) => {
        this.animeList = animes;
        this.initialAnimeList = animes;
      });
  }
}
