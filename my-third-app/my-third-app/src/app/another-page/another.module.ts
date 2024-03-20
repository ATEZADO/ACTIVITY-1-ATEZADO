import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AnotherPage } from './another.page';

import { AnotherPageRoutingModule } from './another-page.routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnotherPageRoutingModule
  ],
  declarations: [AnotherPage]
})
export class AnotherPageModule {}