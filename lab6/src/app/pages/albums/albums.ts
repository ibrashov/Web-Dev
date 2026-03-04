import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { finalize } from 'rxjs';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  error = '';

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    console.log('✅ AlbumsComponent started');

    this.albumService
      .getAlbums()
      .pipe(finalize(() => {
        this.loading = false;
        console.log('✅ loading=false set');
      }))
      .subscribe({
        next: (data) => {
          console.log('✅ albums received:', data.length);
          this.albums = data;
        },
        error: (err) => {
          console.log('❌ albums error:', err);
          this.error = 'Failed to load albums';
        },
      });
  }

  deleteAlbum(id: number, event: MouseEvent): void {
    event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe({
      next: () => (this.albums = this.albums.filter(a => a.id !== id)),
      error: () => (this.error = 'Failed to delete album'),
    });
  }
}