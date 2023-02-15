import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiColors, ApiImages } from './api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiColors = 'http://localhost:3000/colors';
  private readonly apiImages = 'http://localhost:3000/images';

  constructor(private http: HttpClient) { }

  color (): Observable<ApiColors[]> {
    return this.http.get<ApiColors[]>(this.apiColors)
  }

  images(): Observable<ApiImages[]> {
    return this.http.get<ApiImages[]>(this.apiImages)
  }

}
