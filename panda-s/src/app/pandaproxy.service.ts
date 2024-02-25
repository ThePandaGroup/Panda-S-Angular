import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PandaproxyService {


    hostUrl:string = 'http://localhost:8080/';

    constructor(private httpClient: HttpClient) { }
    

    getShoes() {
      return this.httpClient.get(this.hostUrl + 'api/shoes');
    }
  
    getShoe(id: number) {
      return this.httpClient.get(this.hostUrl + 'api/shoes/${id}');
    }

}
