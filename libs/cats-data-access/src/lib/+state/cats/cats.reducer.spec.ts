import { Action } from '@ngrx/store';

import * as CatsActions from './cats.actions';
import { CatsEntity } from './cats.models';
import { CatsState, initialCatsState, catsReducer } from './cats.reducer';

describe('Cats Reducer', () => {
  const createCatsEntity = (id: string, name = ''): CatsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Cats actions', () => {
    it('loadCatsSuccess should return the list of known Cats', () => {
      const cats = [
        createCatsEntity('PRODUCT-AAA'),
        createCatsEntity('PRODUCT-zzz'),
      ];
      const action = CatsActions.loadCatsSuccess({ cats });

      const result: CatsState = catsReducer(initialCatsState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = catsReducer(initialCatsState, action);

      expect(result).toBe(initialCatsState);
    });
  });
});
