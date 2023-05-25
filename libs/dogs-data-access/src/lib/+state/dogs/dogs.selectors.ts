import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DOGS_FEATURE_KEY, DogsState, dogsAdapter } from './dogs.reducer';

// Lookup the 'Dogs' feature state managed by NgRx
export const selectDogsState =
  createFeatureSelector<DogsState>(DOGS_FEATURE_KEY);

const { selectAll, selectEntities } = dogsAdapter.getSelectors();

export const selectDogsLoaded = createSelector(
  selectDogsState,
  (state: DogsState) => state.loaded
);

export const selectDogsError = createSelector(
  selectDogsState,
  (state: DogsState) => state.error
);

export const selectAllDogs = createSelector(
  selectDogsState,
  (state: DogsState) => selectAll(state)
);

export const selectDogsEntities = createSelector(
  selectDogsState,
  (state: DogsState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectDogsState,
  (state: DogsState) => state.selectedId
);

export const selectEntity = createSelector(
  selectDogsEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
