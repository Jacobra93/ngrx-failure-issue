import {inject, Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as DogsActions from './dogs.actions';
import * as DogsSelectors from './dogs.selectors';

@Injectable()
export class DogsFacade {
  private readonly store = inject(Store);
  dogs$ = this.store.pipe(select(DogsSelectors.selectAllDogs));

  init() {
    this.store.dispatch(DogsActions.initDogs());
  }
}
