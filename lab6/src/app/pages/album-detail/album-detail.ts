import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;

  loading = true;
  saving = false;
  error = '';

  editedTitle = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    this.error = '';

    this.albumService
      .getAlbum(id)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data) => {
          this.album = data;
          this.editedTitle = data.title;
        },
        error: () => {
          this.error = 'Failed to load album';
        },
      });
  }

  save(): void {
    if (!this.album) return;

    const title = this.editedTitle.trim();
    if (!title) {
      this.error = 'Title cannot be empty';
      return;
    }

    this.error = '';
    this.saving = true;

    const updated: Album = { ...this.album, title };

    this.albumService
      .updateAlbum(updated)
      .pipe(finalize(() => (this.saving = false)))
      .subscribe({
        next: (result) => {
          this.album = result;
          this.editedTitle = result.title;
        },
        error: () => {
          this.error = 'Failed to update album';
        },
      });
  }

  backToAlbums(): void {
    this.router.navigate(['/albums']);
  }
}