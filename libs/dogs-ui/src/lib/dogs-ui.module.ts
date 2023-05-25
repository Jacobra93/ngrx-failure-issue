import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DogsComponent} from './dogs-component/dogs.component';
import {RouterModule} from "@angular/router";
import {DogsDataAccessModule} from "../../../dogs-data-access/src";

@NgModule({
  imports: [CommonModule,
    DogsDataAccessModule,
    RouterModule.forChild([
      {path: '', component: DogsComponent}
    ]),
  ],
  declarations: [DogsComponent],
})
export class DogsUiModule {
}
