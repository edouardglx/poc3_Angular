import { Component, OnInit } from '@angular/core';
import { Anime } from '@/Anime';
import { ApiService } from '@/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}
  initialAnimeList: Anime[] = [];
  animeList: Anime[] = [];
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
}
