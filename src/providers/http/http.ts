import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  accountIds:number[] = [];


  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }

  getDespositAccounts(){
    return this.http.get("/assets/JSON/listofdepositaccounts.json");
  }

  getAccountBalance(){
    return this.http.get("/assets/JSON/balanceofdepositaccount.json")
  }

}
