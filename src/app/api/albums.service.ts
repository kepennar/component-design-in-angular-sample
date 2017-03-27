import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { Album, Photo } from './model';

const albumsUrl = `${environment.api.baseUrl}/albums/:albumId`;
const photosUrl = `${environment.api.baseUrl}/photos/:photoId`;

@Injectable()
export class AlbumsService {

  constructor(private http: Http) { }

  getAlbum(id = 1): Observable<Album> {
    const url = albumsUrl.replace(/:albumId/, id.toString());
    return this.http.get(url)
    .map(resp => resp.json());
  }

  getAlbumPhotos(albumId: number, q?: string, _start= 0, _limit= 10): Observable<Photo[]> {
    const url = photosUrl.replace(/:photoId/, '');
    return this.http.get(url, {search: {albumId, _start, _limit, q}})
    .map(resp => resp.json());
  }

  getPhotos(_start= 0, _limit= 10, id?: number): Observable<Photo[]> {
    const url = photosUrl.replace(/:photoId/, id ? id.toString() : '');
    return this.http.get(url, {search: {_start, _limit}})
    .map(resp => resp.json());
  }

}
