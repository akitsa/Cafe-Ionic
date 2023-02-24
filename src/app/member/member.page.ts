import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {
  profile : any = {}
  member: any
  user: any = []
  constructor(
    public http: HttpClient,
    public gb: GlobalService,
    public route: NavController
  ) { }

  ngOnInit() {
  }
    getProfile (){
      let data = localStorage.getItem("login")
      this.user = data ? JSON.parse(data):null
    }

    saveMember() {
      
    }
}
