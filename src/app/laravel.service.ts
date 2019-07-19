import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaravelService {
  data:Observable<any[]>
id:number;

  constructor(private http: HttpClient) { }
  getServices(): Observable<any[]> {
    //locally
   // return this.http.get<any[]>('http://localhost:8000/api/categories/')

    //heroku
    return this.http.get<any[]>('https://book-reviws-api.herokuapp.com/api/categories/')
  }
  getService(id:number): Observable<any> {
    //locally
   //return this.http.get('http://localhost:8000/api/categories/'+ id)

   //heroku
    return this.http.get('https://book-reviws-api.herokuapp.com/api/categories/'+ id)

  }
  setter(id:number){
    this.id=id;
  }

 getter(){
   return this.id;
 }

 
}
