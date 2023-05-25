import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDogs from './+state/dogs/dogs.reducer';
import { DogsEffects } from './+state/dogs/dogs.effects';
import {DogsFacade} from "./+state/dogs/dogs.facade";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromDogs.DOGS_FEATURE_KEY, fromDogs.dogsReducer),
    EffectsModule.forFeature([DogsEffects]),
  ],
  providers: [DogsFacade]
})
export class DogsDataAccessModule {}
