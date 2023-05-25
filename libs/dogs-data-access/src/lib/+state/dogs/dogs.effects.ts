import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map, of} from 'rxjs';
import * as DogsActions from './dogs.actions';
import {DogsService} from "./dogs.service";

@Injectable()
export class DogsEffects {
  private actions$ = inject(Actions);
  private readonly dogsService = inject(DogsService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        DogsActions.initDogs,
      ),
      concatMap(() => {
        return this.dogsService.getAll().pipe(
          map(dogs => DogsActions.loadDogsSuccess({ dogs })),
          catchError(error => of(DogsActions.loadDogsFailure(error))),
        );
      }),
    ),
  );
}
