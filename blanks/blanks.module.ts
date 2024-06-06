import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlanksPageRoutingModule } from './blanks-routing.module';

import { BlanksPage } from './blanks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlanksPageRoutingModule
  ],
  declarations: [BlanksPage]
})
export class BlanksPageModule {}
