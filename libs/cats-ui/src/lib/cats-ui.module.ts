import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatsPageComponent} from './cats-component/cats-page.component';
import {RouterModule} from "@angular/router";
import {CatsDataAccessModule} from "../../../cats-data-access/src";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CatsPageComponent}
    ]),
    CatsDataAccessModule,
  ],
  declarations: [CatsPageComponent],
})
export class CatsUiModule {
}
