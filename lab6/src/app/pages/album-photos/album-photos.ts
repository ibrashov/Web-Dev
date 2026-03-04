import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';

import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotosComponent implements OnInit {
  albumId = 0;

  photos: Photo[] = [];
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    this.error = '';

    this.albumService
      .getAlbumPhotos(this.albumId)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data) => (this.photos = data),
        error: () => (this.error = 'Failed to load photos'),
      });
  }

  back(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}