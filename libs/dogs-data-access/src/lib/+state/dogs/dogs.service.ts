import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private API_URL = 'https://api.thedogapi.com/v1/images/search?limit=10';

  constructor(private http: HttpClient) { }

  getAll() {
    console.log('get')
    return this.http.get<[]>(`${this.API_URL}`)
  }
}
