import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { enviornment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl=enviornment.apiUrl;
  constructor(private http:HttpClient) { }
  getUsers():Observable<User[]>{
    const myheaders=new HttpHeaders({'myheader':'kunalsir'})
    return this.http.get<User[]>(`${this.apiUrl}/users`,{headers:myheaders});
  }

  getUser():Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/users/1`);
  }
//creating a POST request
  createUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/users`,user);
  }

}
