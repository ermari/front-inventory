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


  /**
   * save the categories
   */
  saveCategorie(body: any) {
    const endpoint = `${base_url}/categories`;
    return this.http.post(endpoint, body);
  }

  /**
   * update categorie
   */
  updateCategorie(body: any, id: any){
    const endpoint = `${base_url}/categories/ ${id}`;
    return this.http.put(endpoint, body);
  }

  /**
   * update categorie
   */
  deleteCategorie(id: any){
    const endpoint = `${base_url}/categories/ ${id}`;
    return this.http.delete(endpoint);
  }

  /**
   * buscar categorie por id
   */
  getCategorieById(id: any){
    const endpoint = `${base_url}/categories/ ${id}`;
    return this.http.get(endpoint);
  }

  




}