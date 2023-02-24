import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  menus : any 
  user : any = {}
  
  constructor( 
    public http: HttpClient,
    public gb: GlobalService
    ) {
    this.getMenu()
  }

  IonViewDidEnter(){
    this.getMenu()
    this.getProfile()
  }

  getProfile(){
    let data = localStorage.getItem("login")
    this.user = data ? JSON.parse(data) : null 
  }

  getMenu(){
     this.http.get(this.gb.API_URL + "menu_fav").toPromise()
      .then(res => {
        this.menus = res
        console.log(res)
      })
  }
  
}
