import { createAction, props } from '@ngrx/store';
import { CatsEntity } from './cats.models';

export const initCats = createAction('[Cats Page] Init');

export const loadCatsSuccess = createAction(
  '[Cats/API] Load Cats Success',
  props<{ cats: CatsEntity[] }>()
);

export const loadCatsFailure = createAction(
  '[Cats/API] Load Cats Failure',
  props<{ error: any }>()
);
