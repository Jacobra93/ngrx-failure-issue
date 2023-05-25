import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as DogsActions from './dogs.actions';
import { DogsEntity } from './dogs.models';

export const DOGS_FEATURE_KEY = 'dogs';

export interface DogsState extends EntityState<DogsEntity> {
  selectedId?: string | number; // which Dogs record has been selected
  loaded: boolean; // has the Dogs list been loaded
  error?: string | null; // last known error (if any)
}

export interface DogsPartialState {
  readonly [DOGS_FEATURE_KEY]: DogsState;
}

export const dogsAdapter: EntityAdapter<DogsEntity> =
  createEntityAdapter<DogsEntity>();

export const initialDogsState: DogsState = dogsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialDogsState,
  on(DogsActions.initDogs, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(DogsActions.loadDogsSuccess, (state, { dogs }) =>
    dogsAdapter.setAll(dogs, { ...state, loaded: true })
  ),
  on(DogsActions.loadDogsFailure, (state, { error }) => ({ ...state, error }))
);

export function dogsReducer(state: DogsState | undefined, action: Action) {
  return reducer(state, action);
}
