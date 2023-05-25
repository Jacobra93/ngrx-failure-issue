import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map, of} from 'rxjs';
import * as CatsActions from './cats.actions';
import {CatsService} from "./cats.service";

@Injectable()
export class CatsEffects {
  private actions$ = inject(Actions);
  private readonly catsService = inject(CatsService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CatsActions.initCats,
      ),
      concatMap(() => {
        return this.catsService.getAll().pipe(
          map(cats => CatsActions.loadCatsSuccess({ cats })),
          catchError(error => of(CatsActions.loadCatsFailure(error))),
        );
      }),
    ),
  );
}
