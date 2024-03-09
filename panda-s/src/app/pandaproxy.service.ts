import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PandaproxyService {


    hostUrl:string = 'https://panda-s.azurewebsites.net/';

    constructor(private httpClient: HttpClient) { }
    

    getAllShoes() {
      console.log('getting all shoes');
      return this.httpClient.get<any[]>(this.hostUrl + 'app/shoes/');
    }
  
    getAShoe(id: number) {
      return this.httpClient.get(this.hostUrl + 'app/shoes/' + id);
    }

    getASeller(id: number) {
      return this.httpClient.get(this.hostUrl + 'app/sellers/' + id);
    }

    getAStorefront(id: number) {
      return this.httpClient.get(this.hostUrl + 'app/storefronts/' + id);
    }

    getABuyer(id: number) {
      return this.httpClient.get(this.hostUrl + 'app/buyers/' + id);
    }

    // updateCart(buyerId: number, shoeId: number) {
    //   return this.httpClient.post(this.hostUrl + 'app/buyers/' + buyerId + '/cart/' + shoeId, {});
    // }


    updateCart(shoeId: number) {
      console.log('updating cart to....');
      return this.httpClient.post(this.hostUrl + 'app/buyers/cart/' + shoeId, {});
    }


    getLoggedInUser(): Observable<string> {
      console.log('getting logged in user... PLEASE WORK!!!');
      return this.httpClient.get<string>(this.hostUrl + 'app/user');
    }


}
