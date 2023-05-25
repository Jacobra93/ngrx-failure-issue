import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCats from './+state/cats/cats.reducer';
import { CatsEffects } from './+state/cats/cats.effects';
import {CatsFacade} from "./+state/cats/cats.facade";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCats.CATS_FEATURE_KEY, fromCats.catsReducer),
    EffectsModule.forFeature([CatsEffects]),
  ],
  providers: [CatsFacade]
})
export class CatsDataAccessModule {}
