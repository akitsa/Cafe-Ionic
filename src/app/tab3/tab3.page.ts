import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  trans: any
  search: any
  // method yang dijalankan saat class instance
  constructor(
    public http: HttpClient,
    public gb: GlobalService
  ){
    this.getTrans()
  } 

  ionOnInit(){

  }
  getTrans() {
    let dtMember = localStorage.getItem("member")
    let member = dtMember ? JSON.parse(dtMember) : {}

    if(Object.keys(member).length > 0 ) {
      this.http.get(this.gb.API_URL + "trans/" + member.id).toPromise()
      .then(res => {
        this.trans = res
      });
    }
  }
}
