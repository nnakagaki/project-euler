import Coordinate from './coordinate.js';
import generateTriangles from './generateTriangles.js';
import getEdgeCoordinates from './getEdgeCoordinates.js';
import getMidpoint from './getMidpoint.js';

const sideLength = 12345;
let startingCoordinates = [new Coordinate({ x : 0, y : 0 })];
const edgeCoordinates = getEdgeCoordinates(sideLength);
const allTriangles = generateTriangles(sideLength);

// console.log(edgeCoordinates)
// console.log(allTriangles)
// console.log(allTriangles.length)

let newCoordinates = [];
let jumps = 1;
let jumpSum = 0;

while (allTriangles.find((triangle) => triangle.numberOfJumps === null)) {
  edgeCoordinates.forEach((coordinate) => {
    startingCoordinates.forEach((startingCoordinate) => {
      newCoordinates.push(getMidpoint(startingCoordinate, coordinate));
    })
  });
  allTriangles.forEach((triangle) => {
    if (triangle.numberOfJumps === null) {
      for (let i = 0; i < newCoordinates.length; i++) {
        if (triangle.checkCoordinateOverlap(newCoordinates[i])) {
          // console.log('reached!')
          // console.log(triangle)
          triangle.numberOfJumps = jumps;
          jumpSum += jumps;
          break;
        }
      }
    }
  });

  startingCoordinates = newCoordinates;
  newCoordinates = [];
  jumps += 1;

  console.log('triangles left', allTriangles.filter((triangle) => triangle.numberOfJumps === null).length)
  console.log('jumps',jumps)
}

console.log(jumpSum);