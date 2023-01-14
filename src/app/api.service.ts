import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  results$ = new Subject();
  constructor(private http: HttpClient) { }
  //get all data
  search(data:any)
  {
  this.http.get('http://localhost/api/db_connect.php?email=' + data.value)
  .subscribe(
    (res) => {this.results$.next(res);}
  );
  }

}
