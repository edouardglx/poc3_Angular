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
  animeList: Anime[] = [];
  isLoading: boolean = true;
}
