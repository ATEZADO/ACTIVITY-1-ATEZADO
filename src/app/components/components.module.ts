import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentsPageRoutingModule } from './components-routing.module';

import { ComponentsPage } from './components.page';
import { ModalComponent } from '../modal/modal.component';
import { SliderComponent } from '../slider/slider.component';
import { TabsComponent } from '../tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsPageRoutingModule
  ],
  declarations: [ComponentsPage, ModalComponent, SliderComponent, TabsComponent]
})
export class ComponentsPageModule {}