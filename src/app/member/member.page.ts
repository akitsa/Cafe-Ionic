import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {
  profile: any = {};
  result: any = {};
  user: any = {};

  constructor(
    public http: HttpClient,
    public gb: GlobalService,
    public route: NavController
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.getProfile();
  }

  getProfile() {
    // User Login
    const dataUser = localStorage.getItem('login');
    this.user = dataUser ? JSON.parse(dataUser) : {};

    // Member
    const dataMember: any = localStorage.getItem('member');
    const member = JSON.parse(dataMember);
    this.profile = Object.keys(member).length > 0 ? member : {};

    // Cek Data Member
    if (Object.keys(member).length == 0) {
      // Jika di localstorage data member kosong maka
      // Diset setiap data yang dibutuhkan
      this.profile.cus_user_id = this.user.id;
      this.profile.cus_nm = this.user.name;
      this.profile.id = null;
      this.profile.cus_kd = null;
    } else {
      // Merubah tipe data jenis kelamin
      this.profile.cus_jk = this.profile.cus_jk.toString();
    }
  }

  saveMember() {
    // Progress Bar
    this.gb.show_loading();

    let headers: any = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    this.http
      .post(this.gb.API_URL + 'member', JSON.stringify(this.profile), headers)
      .toPromise()
      .then((res) => {
        this.result = res;
        this.gb.hide_loading(); // Sembunyikan Loading
        console.log(res);

        if (this.result.error == 0) {
          // Update LocalStorage Member
          localStorage.setItem('login', JSON.stringify(this.result.data.user));
          localStorage.setItem(
            'member',
            JSON.stringify(this.result.data.member)
          );
          this.route.navigateBack('tabs/tab4');
          this.gb.notif(this.result.mess, 'success');
        } else {
          this.gb.notif(this.result.mess, 'danger');
        }
      });
  }
}
