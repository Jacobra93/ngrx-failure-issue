import { createAction, props } from '@ngrx/store';
import { DogsEntity } from './dogs.models';

export const initDogs = createAction('[Dogs Page] Init');

export const loadDogsSuccess = createAction(
  '[Dogs/API] Load Dogs Success',
  props<{ dogs: DogsEntity[] }>()
);

export const loadDogsFailure = createAction(
  '[Dogs/API] Load Dogs Failure',
  props<{ error: any }>()
);
