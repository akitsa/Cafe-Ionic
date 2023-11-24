import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: any = {}
  result : any = {}
  constructor(
    public route :NavController,
    public http : HttpClient,
    public gb: GlobalService
  ) { }

  ngOnInit() {
  }
  goLogin (){
    // validasi
    if(!this.login.password){
      this.gb.notif("password tidak boleh kosong","danger")
      return 
    }
    
    // loading 
    this.gb.show_loading()

    // header 
    let headers: any = new HttpHeaders()
    headers.append('Acces-Control-Allow-Origin','*')
    headers.append('Accept','application/json')
    headers.append('Content-Type','application/json')

    // kirim login informasi
    this.http.post(this.gb.API_URL + "login", JSON.stringify(this.login), headers).toPromise()
    .then(res => {
      this.result = res // Data response JSON
      this.gb.hide_loading() // Hide Loading
      if (this.result.error == 0) {
        localStorage.setItem("login", JSON.stringify(this.result.data.user))
        localStorage.setItem("member", JSON.stringify(this.result.data.member))
        this.route.navigateForward("tabs/tab1") // Jika Berhasil Login diarahkan ke tab1
        this.gb.notif(this.result.mess, "success") // Notifikasi
      } else {
        this.gb.notif(this.result.mess, "danger") // Notifikasi
      }
    })

  console.log(this.login)

}

goRegistrasi() {
  this.route.navigateForward('register')
}

}
