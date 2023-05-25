import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  private API_URL = 'https://api.thecatapi.com/v1/images/search?limit=10';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<[]>(`${this.API_URL}`)
  }
}
