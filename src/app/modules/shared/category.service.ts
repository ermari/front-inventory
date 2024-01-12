import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url ="http://localhost:8080/api/v1";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  /***
   * get all caetegories
   */
  getCategories(){
   
    const endpoint="http://localhost:8080/api/v1/categories";
    console.log(endpoint);
    return this.http.get(endpoint);
  }

}