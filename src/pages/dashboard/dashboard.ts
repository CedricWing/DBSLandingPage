import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvider} from '../../providers/http/http'

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  depositAccountsObj:any;

  constructor(public navCtrl: NavController, private http:HttpProvider) {
    this.getDepositAccounts();
  }
  
  hideCard(b:boolean, id){
    
  }

  getDepositAccounts(){
    this.http.getDespositAccounts().subscribe(res=>{
      this.http.accountIds = [];
      this.depositAccountsObj = res;
      for (let i = 0; i < this.depositAccountsObj.length; i++) {
        this.http.accountIds.push(this.depositAccountsObj[i].accountId);
      }
      console.log(this.http.accountIds);
    })
  }

  getAccountBalance(){
    this.http.getAccountBalance().subscribe(res=>{
      
    })
  }

}
