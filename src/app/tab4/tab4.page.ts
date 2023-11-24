import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  user : any = {}  
  constructor(
    public route: NavController
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getProfile()
  }

  getProfile(){
    // user login
    const dataUser = localStorage.getItem("login")
    this.user = dataUser ? JSON.parse(dataUser) : {}
  }

  goTo(page: any) {
    this.route.navigateForward(page)
  }

  logOut(){
    localStorage.clear()
    this.route.navigateRoot('/')
  }

}
