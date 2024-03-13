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
  
    getAShoe(id: string) {
      return this.httpClient.get(this.hostUrl + 'app/shoes/' + id);
    }

    getASeller(id: string) {
      return this.httpClient.get(this.hostUrl + 'app/sellers/' + id);
    }

    getAStorefront(id: string) {
      return this.httpClient.get(this.hostUrl + 'app/storefronts/' + id);
    }

    getABuyer(id: string) {
      return this.httpClient.get(this.hostUrl + 'app/buyers/' + id);
    }

    // updateCart(buyerId: number, shoeId: number) {
    //   return this.httpClient.post(this.hostUrl + 'app/buyers/' + buyerId + '/cart/' + shoeId, {});
    // }


    updateCart(shoeId: string) {
      console.log('updating cart to....');
      return this.httpClient.post(this.hostUrl + 'app/buyers/cart/' + shoeId, {});
    }


    // getLoggedInUser(): Observable<string> {
    //   console.log('getting logged in user');
    //   return this.httpClient.get<string>(this.hostUrl + 'app/login/');
    // }

    getLoggedInUser(): Observable<{ buyerId: string }> {
      console.log('getting logged in user');
      return this.httpClient.get<{ buyerId: string }>(this.hostUrl + 'app/login/');
    }

    // logout(): Observable<void> {
    //   return this.httpClient.get<void>(this.hostUrl + 'app/logout/');
    // }

    logout(): Observable<void> {
      console.log('logging out...')
      return this.httpClient.get<void>(this.hostUrl + 'app/logout/', { withCredentials: true });
    }


    removeFromCart(shoeId: string): Observable<any> {
      console.log('removing from cart...');
      return this.httpClient.delete(this.hostUrl + 'app/buyers/cart/' + shoeId, { withCredentials: true });
    }
    


    updateFavList(shoeId: string) {
      console.log('updating favorite list to....');
      return this.httpClient.post(this.hostUrl + 'app/buyers/favList/' + shoeId, {});
    }
    removeFromFav(shoeId: string): Observable<any> {
      console.log('removing from favorite list');
      return this.httpClient.delete(this.hostUrl + '/app/buyers/favList/' + shoeId, { withCredentials: true });
    }

}
