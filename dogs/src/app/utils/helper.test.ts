import { getBreedName } from './helper';

describe('getBreedName', () => {
  it('should extract the breed name from a well-formed URL', () => {
    const url = 'https://dog.ceo/breeds/hound-afghan/3';
    const breedName = getBreedName(url);
    expect(breedName).toEqual('hound-afghan');
  });

  it('should handle URLs without a trailing slash after the breed name', () => {
    const url = 'https://dog.ceo/breeds/labrador';
    const breedName = getBreedName(url);
    expect(breedName).toEqual('labrador');
  });
});
