import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as CatsActions from './cats.actions';
import { CatsEffects } from './cats.effects';

describe('CatsEffects', () => {
  let actions: Observable<Action>;
  let effects: CatsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        CatsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(CatsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CatsActions.initCats() });

      const expected = hot('-a-|', {
        a: CatsActions.loadCatsSuccess({ cats: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
