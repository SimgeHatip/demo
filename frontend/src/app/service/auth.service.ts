import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_PATH = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  login(usernameOrEmail: string, password: string): Observable<any> {
    const loginPayload = {usernameOrEmail, password};
    return this.http.post(`${this.BASE_PATH}/api/auth/login`, loginPayload);
  }

  saveToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    // Çıkış sonrası giriş sayfasına yönlendirme veya ilgili işlemleri burada yapabilirsiniz.
  }

}
