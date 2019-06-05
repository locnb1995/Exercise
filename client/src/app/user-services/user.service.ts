import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getListUser() {
    return this.http.get('http://localhost:8080/');
  }

  createNewUser(value) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post('http://localhost:8080/addUser', value, httpOptions);
  }

  createManyUser(value) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post('http://localhost:8080/addManyUser', value, httpOptions);
  }

  deleteUser(id) {
    return this.http.delete('http://localhost:8080/deleteUserById/' + id);
  }

}
