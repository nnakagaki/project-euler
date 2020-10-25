import Coordinate from './coordinate.js';
import Triangle, { triangleHeight } from './triangle.js';

export default (n) => {
  const allTriangles = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n * 2 - i; j++) {
      allTriangles.push(new Triangle(new Coordinate({
        x : -1 * n + 1 / 2 * i + j,
        y : triangleHeight * i
      })));
    }
  }

  return allTriangles;
}