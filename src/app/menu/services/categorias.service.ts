import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../interfaces/menuItem.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  constructor(private http: HttpClient) {}

  getCategorias(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>('assets/mockData.json');
  }
}