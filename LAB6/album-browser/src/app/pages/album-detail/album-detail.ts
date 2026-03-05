import {Component, OnInit} from '@angular/core';
import {Album} from '../../models/album';
import {AlbumService} from '../../services/album-service';
import {Router} from 'express';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  imports: [
    NgIf,
    FormsModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail implements OnInit {
    album?: Album;
    constructor(
      private route: ActivatedRoute,
      private albumService: AlbumService
    ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe((data) => {
      this.album = data;
    })
  }
  saveChanges(): void {
    if (this.album) {
      this.albumService.updateAlbum(this.album).subscribe(() => {
        alert('Album updated successfully!');
      });
    }
  }

}
