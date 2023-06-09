import { Action } from '@ngrx/store';

import * as DogsActions from './dogs.actions';
import { DogsEntity } from './dogs.models';
import { DogsState, initialDogsState, dogsReducer } from './dogs.reducer';

describe('Dogs Reducer', () => {
  const createDogsEntity = (id: string, name = ''): DogsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Dogs actions', () => {
    it('loadDogsSuccess should return the list of known Dogs', () => {
      const dogs = [
        createDogsEntity('PRODUCT-AAA'),
        createDogsEntity('PRODUCT-zzz'),
      ];
      const action = DogsActions.loadDogsSuccess({ dogs });

      const result: DogsState = dogsReducer(initialDogsState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = dogsReducer(initialDogsState, action);

      expect(result).toBe(initialDogsState);
    });
  });
});
