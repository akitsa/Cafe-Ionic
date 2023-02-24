import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleMenuPageRoutingModule } from './single-menu-routing.module';

import { SingleMenuPage } from './single-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleMenuPageRoutingModule
  ],
  declarations: [SingleMenuPage]
})
export class SingleMenuPageModule {}
