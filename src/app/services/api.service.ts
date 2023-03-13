import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiColors, ApiImages } from './api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiColors = 'https://todo-api-fen7.onrender.com/colors';
  private readonly apiImages = 'https://todo-api-fen7.onrender.com/images';

  constructor(private http: HttpClient) { }

  color (): Observable<ApiColors[]> {
    return this.http.get<ApiColors[]>(this.apiColors)
  }

  images(): Observable<ApiImages[]> {
    return this.http.get<ApiImages[]>(this.apiImages)
  }

}
