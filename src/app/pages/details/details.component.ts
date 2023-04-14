import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anime } from '@/Anime';
import { ApiService } from '@/services/api.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id: string = '';
  anime: Anime = {
    _id: 0,
    title: '',
    image: '',
  };
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    try {
      this.apiService
        .getSpecificAnime(this.id)
        .pipe(
          finalize(() => {
            this.loading = false;
          })
        )
        .subscribe((animes) => {
          this.anime = animes;
        });
    } catch (e) {
      console.log('erreur : ' + e);
      this.loading = false;
    }
  }
}
