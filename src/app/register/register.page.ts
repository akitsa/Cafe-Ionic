import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    reg: any = {}
    result : any = {}
  constructor(
    public http: HttpClient,
    public route: NavController,
    public gb: GlobalService
  ) { }

  ngOnInit() {
  }

  goRegister(){
    // validasi
    if(!this.reg.name){
      this.gb.notif("name cant empty !",'warning')
      return
    }

    if(!this.reg.email){
      this.gb.notif("email cant empty !",'warning')
      return
    }

    if(!this.gb.validateEmail(this.reg.email)){
      this.gb.notif("email invalid",'warning')
      return
    }

    if(!this.reg.password){
      this.gb.notif("password cant empty",'warning')
      return
    }

    // proggres bar
    this.gb.show_loading();

    let headers : any = new HttpHeaders()
    headers.append('Acces-Control-Allow-Origin','*')
    headers.append('Accept','application/json')
    headers.append('Content-Type','application/json')

    this.http.post(this.gb.API_URL + "register", JSON.stringify(this.reg),headers).toPromise()
    .then(res => {
      this.result = res 
      this.gb.hide_loading()
      console.log(res)

      if(this.result.error == 0 ){
        this.route.navigateBack('/')

        this.gb.notif(this.result.mess,"succes")
      }else {
        this.gb.notif(this.result.mess, "danger")
      }
    })
    console.log(this.reg)
  }

}
