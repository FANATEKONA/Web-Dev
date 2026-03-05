import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Album} from '../models/album';
import {Photo} from '../models/photo';


@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}?_limit=12`);
  }

  getAlbum(id:number): Observable<Album>{
    return this.http.get<Album>(`${this.apiUrl}/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]>{
    return this.http.get<Photo[]>(`${this.apiUrl}/${id}/photos?_limit=12`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
