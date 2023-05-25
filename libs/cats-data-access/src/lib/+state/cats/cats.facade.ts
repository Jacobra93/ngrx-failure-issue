import {inject, Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as CatsActions from './cats.actions';
import * as CatsSelectors from './cats.selectors';

@Injectable()
export class CatsFacade {
  private readonly store = inject(Store);
  cats$ = this.store.pipe(select(CatsSelectors.selectAllCats));

  init() {
    this.store.dispatch(CatsActions.initCats());
  }
}
