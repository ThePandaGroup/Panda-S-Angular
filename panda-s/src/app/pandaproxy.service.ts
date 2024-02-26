import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PandaproxyService {


    hostUrl:string = 'http://localhost:8080/app/';

    constructor(private httpClient: HttpClient) { }
    

    getAllShoes() {
      return this.httpClient.get<any[]>(this.hostUrl + 'shoes/');
    }
  
    getShoe(id: number) {
      return this.httpClient.get(this.hostUrl + 'shoes/' + id);
    }

    getASeller(id: number) {
      return this.httpClient.get(this.hostUrl + 'sellers/' + id);
    }

    getAStorefront(id: number) {
      return this.httpClient.get(this.hostUrl + 'storefronts/' + id);
    }

}
