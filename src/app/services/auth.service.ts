import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  login(username:string, password:string):Observable<any>{
    return this.http.post(`${this.apiUrl}/signin` , {username, password})
       .pipe(
          tap((response: any) =>{
            localStorage.setItem('token', response.accessToken);
          })
       );
  }

  register(username: string, email:string, password:string):Observable<any>{
    return this.http.post( `${this.apiUrl}/signup`, {username, email, password});
  }

  logout(){
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
