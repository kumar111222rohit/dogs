// method to extract the breed name from the url of the image
export function getBreedName(url: string) {
  const parts = url.split('/');
  const breedIndex = parts.indexOf('breeds') + 1;

  return parts[breedIndex];
}
