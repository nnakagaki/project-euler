import Coordinate from './coordinate.js';

export default (n) => {
  const coordinates = [];
  const baseYHeight = (n ** 2 - (1 / 2 * n) ** 2) ** (1 / 2);
  coordinates.push(new Coordinate({ x : -1 * n, y : 0 }));
  coordinates.push(new Coordinate({ x : -1 / 2 * n, y : baseYHeight }));
  coordinates.push(new Coordinate({ x : 1 / 2 * n, y : baseYHeight }));
  coordinates.push(new Coordinate({ x : n, y : 0 }));
  coordinates.push(new Coordinate({ x : 1 / 2 * n, y : -1 * baseYHeight }));
  coordinates.push(new Coordinate({ x : -1 / 2 * n, y : -1 * baseYHeight }));

  return coordinates;
};
