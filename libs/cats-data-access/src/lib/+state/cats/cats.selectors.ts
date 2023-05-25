import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CATS_FEATURE_KEY, CatsState, catsAdapter } from './cats.reducer';

// Lookup the 'Cats' feature state managed by NgRx
export const selectCatsState =
  createFeatureSelector<CatsState>(CATS_FEATURE_KEY);

const { selectAll, selectEntities } = catsAdapter.getSelectors();

export const selectCatsLoaded = createSelector(
  selectCatsState,
  (state: CatsState) => state.loaded
);

export const selectCatsError = createSelector(
  selectCatsState,
  (state: CatsState) => state.error
);

export const selectAllCats = createSelector(
  selectCatsState,
  (state: CatsState) => selectAll(state)
);

export const selectCatsEntities = createSelector(
  selectCatsState,
  (state: CatsState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectCatsState,
  (state: CatsState) => state.selectedId
);

export const selectEntity = createSelector(
  selectCatsEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
