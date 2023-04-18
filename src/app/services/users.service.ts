import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs';
import { userData } from '../constants/users';
import { User } from '../constants/User';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private Iurl = 'https://reqres.in/api/users'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  getData() : Observable<userData>{
    const url = `${this.Iurl}`;
    return this.http.get<userData>(this.Iurl)
  }

  getUser(id : number) : Observable<User>{
    const url = `${this.Iurl}/${id}`
    return this.http.get<User>(url)
  }

  addUser(user : User) : Observable<User>{
    return this.http.post<User>(this.Iurl, user, this.httpOptions)
  }

  deleteUser(id:number) : Observable<userData>{
    const url = `${this.Iurl}/${id}`
    return this.http.delete<userData>(url , this.httpOptions)
  }

  updateUser(user : User) : Observable<any>{
    return this.http.put(this.Iurl , user , this.httpOptions)
  }
}
