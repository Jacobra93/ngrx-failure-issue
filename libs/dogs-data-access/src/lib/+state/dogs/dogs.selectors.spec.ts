import { DogsEntity } from './dogs.models';
import {
  dogsAdapter,
  DogsPartialState,
  initialDogsState,
} from './dogs.reducer';
import * as DogsSelectors from './dogs.selectors';

describe('Dogs Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getDogsId = (it: DogsEntity) => it.id;
  const createDogsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as DogsEntity);

  let state: DogsPartialState;

  beforeEach(() => {
    state = {
      dogs: dogsAdapter.setAll(
        [
          createDogsEntity('PRODUCT-AAA'),
          createDogsEntity('PRODUCT-BBB'),
          createDogsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialDogsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Dogs Selectors', () => {
    it('selectAllDogs() should return the list of Dogs', () => {
      const results = DogsSelectors.selectAllDogs(state);
      const selId = getDogsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = DogsSelectors.selectEntity(state) as DogsEntity;
      const selId = getDogsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectDogsLoaded() should return the current "loaded" status', () => {
      const result = DogsSelectors.selectDogsLoaded(state);

      expect(result).toBe(true);
    });

    it('selectDogsError() should return the current "error" state', () => {
      const result = DogsSelectors.selectDogsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
