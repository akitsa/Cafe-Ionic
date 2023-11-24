import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-menu',
  templateUrl: './single-menu.page.html',
  styleUrls: ['./single-menu.page.scss'],
})
export class SingleMenuPage implements OnInit {
  menus: any = []

  constructor(
    public ac : ActivatedRoute
  ) { 

  }
    
  ngOnInit() {
  }

  ionViewDidEnter(){
    let menu = this.ac.snapshot.paramMap.get("data")
    this.menus = menu ? JSON.parse(menu) : "";
  }

}
