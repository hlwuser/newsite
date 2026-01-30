const BASE_PATH = '/test-p';

export const getImagePath = (
  imagePath: string,
  fallback: string = '/images/placeholder.svg'
): string => {
  const path = imagePath && imagePath.trim() ? imagePath : fallback;
  return `${BASE_PATH}${path}`;
};
