import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shoe } from '../../app/shoeData';

@Injectable({
  providedIn: 'root'
})
export class ShoeServiceService {

   private apiURL = 'https://localhost:44353/api/shoes';
  getInfo: any;

  constructor(private http:HttpClient) { }
  getData():Observable<Shoe[]>{
    return this.http.get<Shoe[]>(this.apiURL);
  }
  
}
