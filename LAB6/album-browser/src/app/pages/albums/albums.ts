import { Component, OnInit } from '@angular/core';
import {Album} from '../../models/album';
import {AlbumService} from '../../services/album-service';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';



@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
  ],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums {
    albums: Album[] = [];

    constructor(private albumService: AlbumService) {}

    ngOnInit():void {
      this.fetchAlbums();
    }

    fetchAlbums(): void {
      this.albumService.getAlbums().subscribe((data) => {
        this.albums = data;
      })
    }

    deleteAlbum(id: number) {
      this.albumService.deleteAlbum(id).subscribe((data) => {
        this.albums = this.albums.filter(album => album.id !== id);
      })
    }

}
