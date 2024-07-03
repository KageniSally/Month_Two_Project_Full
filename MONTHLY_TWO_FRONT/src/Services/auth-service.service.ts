import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse, RegisterResponse, User } from '../Models/userModel';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private readonly BaseURL = 'http://localhost:5000/users/'

  constructor(private http: HttpClient, private router: Router) { }


  registerUser(newUser: User): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.BaseURL + "register", newUser)

  }

  loginUser(user: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.BaseURL + "login", user)
  }

  deleteUser(userId: string) {
    const token = localStorage.getItem('token') as string
    const headers = new HttpHeaders().set('token', token)

    return this.http.delete<LoginResponse>(`${this.BaseURL}/${userId}`, { headers })
  }

  getUsers(): Observable<User[]> {
    const token = localStorage.getItem('token') as string
    return this.http.get<User[]>(this.BaseURL, {
      headers: new HttpHeaders({ token: token })
    })
  }

  getUser(userId:string): Observable<User[]> {
    const token = localStorage.getItem('token') as string
    return this.http.get<User[]>(`${this.BaseURL}/${userId}`, {
      headers: new HttpHeaders({ token: token })
    })
  }


  //Protect RoutesUsing Guards
  private isLoggedIn = false

  login() {
    this.isLoggedIn = true
  }
  logOut() {
    this.isLoggedIn = false
    localStorage.clear()
    this.router.navigate(['/'])
  }

  showStatus() {
    return this.isLoggedIn
  }
}
