import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PandaproxyService {


    hostUrl:string = 'http://localhost:8080/';

    constructor(private httpClient: HttpClient) { }
    

    // Needs to create some getters here...

//     e.g. getListsIndex() {
//     return this.httpClient.get<any[]>( this.hostUrl + 'json/lists.json');
//   }

//   getItems(index: string) {
//     return this.httpClient.get( this.hostUrl + 'json/lists/' + index + '.json');
//   }

}
