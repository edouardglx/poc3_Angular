import { Component, OnInit } from '@angular/core';
import { Anime } from '@/Anime';
import { ApiService } from '../../services/api.service';
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

  HandleSearch = (value: string) => {
    if (value.length > 0) {
      const filteredData = this.initialAnimeList.filter((anime) => {
        return anime.title.toLowerCase().includes(value.toLowerCase());
      });
      this.animeList = filteredData;
    }
  };
  HandleClear = () => {
    this.animeList = this.initialAnimeList;
  };
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
