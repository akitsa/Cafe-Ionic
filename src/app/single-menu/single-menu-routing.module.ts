import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleMenuPage } from './single-menu.page';

const routes: Routes = [
  {
    path: '',
    component: SingleMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleMenuPageRoutingModule {}
