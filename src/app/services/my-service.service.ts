import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../app/ItemData';

@Injectable({
  providedIn: 'root'
})

export class MyServiceService {

  private apiURL = 'https://localhost:44353/api/menucrudapi';
  getInfo: any;

  constructor(private http:HttpClient) { }
  getData():Observable<Item[]>{
    return this.http.get<Item[]>(this.apiURL);
  }
  
}
