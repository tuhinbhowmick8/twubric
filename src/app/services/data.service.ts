import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { }

  apiUrl= '/api/allUsersData'

  getData(){
    return this._http.get(this.apiUrl)
  }


 
}
