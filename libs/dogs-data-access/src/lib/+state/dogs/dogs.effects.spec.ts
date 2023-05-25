import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as DogsActions from './dogs.actions';
import { DogsEffects } from './dogs.effects';

describe('DogsEffects', () => {
  let actions: Observable<Action>;
  let effects: DogsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DogsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(DogsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: DogsActions.initDogs() });

      const expected = hot('-a-|', {
        a: DogsActions.loadDogsSuccess({ dogs: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
