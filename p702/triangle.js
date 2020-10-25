import Coordinate from './coordinate.js';

export const triangleHeight = (1 ** 2 - (1 / 2) ** 2) ** (1 / 2);
const slope = triangleHeight * 2;

export default class Triangle {
  constructor(leftmostCoordinate) {
    this.c1 = leftmostCoordinate;
    this.c2 = new Coordinate({ x : leftmostCoordinate.x + 1 / 2, y : leftmostCoordinate.y + triangleHeight });
    this.c3 = new Coordinate({ x : leftmostCoordinate.x + 1 , y : leftmostCoordinate.y });
    this.maxX = this.c3.x;
    this.minX = this.c1.x;
    this.maxY = this.c2.y;
    this.minY = this.c1.y;
    this.numberOfJumps = null;
  }

  checkCoordinateOverlap(coordinate) {
    if (!(
      (coordinate.x > this.minX + 0.001) &&
      (coordinate.x < this.maxX - 0.001) &&
      (coordinate.y > this.minY + 0.001) &&
      (coordinate.y < this.maxY - 0.001)
    )) {
      return false;
    }

    // console.log(this.minX)
    // console.log(this.maxX)
    // console.log(this.minY)
    // console.log(this.maxY)
    // console.log(coordinate);

    if (coordinate.x < this.c2.x) {
      if (coordinate.y + 0.001 < this.c1.y + Math.abs(this.c1.x - coordinate.x) * slope) {
        return true;
      }
    } else {
      if (coordinate.y + 0.001 < this.c1.y + Math.abs(this.c3.x - coordinate.x) * slope) {
        return true;
      }
    }

    return false;
  }
}