import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  func = () => {
    return this.http.get("http://www.localhost:3000/viewcourse")
  }
  addcourse = (course: any) => {
    return this.http.post<any>("http://www.localhost:3000/addcourse", course)
  }
}
