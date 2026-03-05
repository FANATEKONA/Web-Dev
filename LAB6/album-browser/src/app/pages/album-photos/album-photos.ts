import {Component, OnInit} from '@angular/core';
import {Photo} from '../../models/photo';
import {Router} from 'express';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {AlbumService} from '../../services/album-service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-album-photos',
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotos implements OnInit {
  photos: Photo[] = [];
  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
  ) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(id).subscribe((data) => {
      this.photos = data.slice(0,10);
    })
  }
}
