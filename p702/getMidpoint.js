import Coordinate from './coordinate.js'

export default (coordinate1, coordinate2) => {
  const newX = (coordinate1.x + coordinate2.x) / 2;
  const newY = (coordinate1.y + coordinate2.y) / 2;

  return new Coordinate({ x : newX, y : newY });
};
