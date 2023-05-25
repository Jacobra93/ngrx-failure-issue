import { CatsEntity } from './cats.models';
import {
  catsAdapter,
  CatsPartialState,
  initialCatsState,
} from './cats.reducer';
import * as CatsSelectors from './cats.selectors';

describe('Cats Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCatsId = (it: CatsEntity) => it.id;
  const createCatsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CatsEntity);

  let state: CatsPartialState;

  beforeEach(() => {
    state = {
      cats: catsAdapter.setAll(
        [
          createCatsEntity('PRODUCT-AAA'),
          createCatsEntity('PRODUCT-BBB'),
          createCatsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialCatsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Cats Selectors', () => {
    it('selectAllCats() should return the list of Cats', () => {
      const results = CatsSelectors.selectAllCats(state);
      const selId = getCatsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = CatsSelectors.selectEntity(state) as CatsEntity;
      const selId = getCatsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectCatsLoaded() should return the current "loaded" status', () => {
      const result = CatsSelectors.selectCatsLoaded(state);

      expect(result).toBe(true);
    });

    it('selectCatsError() should return the current "error" state', () => {
      const result = CatsSelectors.selectCatsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
