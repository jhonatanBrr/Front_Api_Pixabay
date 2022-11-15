import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HostServiceService } from '../host/host-service.service';

@Injectable({
  providedIn: 'root'
})
export class QueriesServiceService {

  constructor(
    private http: HttpClient,
    private host:HostServiceService
  ) { }


  consultImage(search:string): Promise<any> { 
    return new Promise((resolve, reject) => {
      this.http.get(`${this.host.url}&q=${search}&per_page=200`)
        .subscribe(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        )
    })
  }

  consultCategories(categorie:string): Promise<any> { 
    return new Promise((resolve, reject) => {
      this.http.get(`${this.host.url}&category=${categorie}&per_page=200`)
        .subscribe(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        )
    })
  }

}
