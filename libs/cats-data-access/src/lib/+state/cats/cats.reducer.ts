import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CatsActions from './cats.actions';
import { CatsEntity } from './cats.models';

export const CATS_FEATURE_KEY = 'cats';

export interface CatsState extends EntityState<CatsEntity> {
  selectedId?: string | number; // which Cats record has been selected
  loaded: boolean; // has the Cats list been loaded
  error?: string | null; // last known error (if any)
}

export interface CatsPartialState {
  readonly [CATS_FEATURE_KEY]: CatsState;
}

export const catsAdapter: EntityAdapter<CatsEntity> =
  createEntityAdapter<CatsEntity>();

export const initialCatsState: CatsState = catsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialCatsState,
  on(CatsActions.initCats, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CatsActions.loadCatsSuccess, (state, { cats }) =>
    {
      console.log('CATS', cats)
      return catsAdapter.setAll(cats, { ...state, loaded: true })
    }
  ),
  on(CatsActions.loadCatsFailure, (state, { error }) => ({ ...state, error }))
);

export function catsReducer(state: CatsState | undefined, action: Action) {
  return reducer(state, action);
}
