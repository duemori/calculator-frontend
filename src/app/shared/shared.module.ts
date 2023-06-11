import { NgModule } from '@angular/core';

import { MainComponent } from './main/main.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    MainComponent
  ]
})
export class SharedModule { }
