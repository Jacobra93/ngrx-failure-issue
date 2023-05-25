import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  // the store is expecting an array
  // this returns an object which breaks the app,
  private API_URL = 'https://api.thecatapi.com/v1/images/0XYvRd7oD';

  // this API works since it returns an array like the store is expecting
  // private API_URL = 'https://api.thecatapi.com/v1/images/search?limit=10';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<[]>(`${this.API_URL}`)
  }
}
