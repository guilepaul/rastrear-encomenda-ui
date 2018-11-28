import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncomendasService {

  private api = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  listar(): Observable<any> {
    return this.http.get<any>(`${this.api}/encomendas`);
  }

  listarClientes(): Observable<any> {
    return this.http.get<any>(`${this.api}/clientes`);
  }

  listarLocais(): Observable<any> {
    return this.http.get<any>(`${this.api}/locais`);
  }

  listarSteps(): Observable<any> {
    return this.http.get<any>(`${this.api}/steps`);
  }
}
