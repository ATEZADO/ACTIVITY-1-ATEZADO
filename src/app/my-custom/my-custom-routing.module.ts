import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCustomPageWithId } from './my-custom-page-with-id/my-custom-page-with-id';
import { MyCustomPage } from './my-custom.page';

const routes: Routes = [
  {
    path: '',
    component: MyCustomPage,
  },
  {
    path: "/my-custom-page/:id",
    component: MyCustomPageWithId,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCustomPageRoutingModule {}
