const sampleArray = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const numGenerations = 10;

//function calls giveMeLife a given amount of times(num of generations) and return the final generation
giveMeLifeByGeneration = (firstGen, generations) => {
  let nextGen = firstGen;
  for (let i = 0; i < generations; i++) {
    nextGen = giveMeLife(nextGen);
  }
  return nextGen;
};

//This log provides output the the console
console.log(giveMeLifeByGeneration(sampleArray, numGenerations));

//HELPER FUNCTIONS

// Calculates next gen grid
// Assumption: grid is always a square
function giveMeLife(grid) {
  //need a new arr and old array, because you update fully
  const newGrid = createEmptyGrid(grid.length);
  //loop through each grid item and gather counts to determine next gen values
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      let count = countNeighbors(grid, i, j);
      let nextGenValue = getNewGeneration(count, grid[i][j]);
      newGrid[i][j] = nextGenValue;
    }
  }
  return newGrid;
}

//returns the next generation value based on neighbor counts and previous value
function getNewGeneration(count, oldVal) {
  if (oldVal === 3) return 0;
  if (oldVal === null || oldVal === 0) {
    if (count.adult === 2) return 1;
    return 0;
  }
  const totalNeigbors = count.newborn + count.adult + count.senior;
  if (oldVal === 1) {
    if (totalNeigbors >= 5 || totalNeigbors <= 1) {
      return 0;
    } else {
      return 2;
    }
  }
  if (oldVal === 2) {
    if (totalNeigbors >= 3 || totalNeigbors === 0) {
      return 0;
    } else {
      return 3;
    }
  }
}

//helper to count neighbors
function countNeighbors(grid, x, y) {
  let sum = { adult: 0, newborn: 0, senior: 0 };

  // these limits make it some edges and corners don't try to count cells that do not exist.
  const maxIndex = grid.length - 1;
  const neighborXminLimit = x === 0 ? 0 : -1;
  const neighborXmaxLimit = x === maxIndex ? 0 : 1;
  const neighborYminLimit = y === 0 ? 0 : -1;
  const neighborYmaxLimit = y === maxIndex ? 0 : 1;

  for (let i = neighborXminLimit; i <= neighborXmaxLimit; i++) {
    for (let j = neighborYminLimit; j <= neighborYmaxLimit; j++) {
      // don't count self
      if (i === 0 && j === 0) continue;

      const neighbor = grid[x + i][y + j];
      if (neighbor === 3) {
        sum.senior = sum.senior + 1;
      } else if (neighbor === 2) {
        sum.adult = sum.adult + 1;
      } else if (neighbor === 1) {
        sum.newborn = sum.newborn + 1;
      }
    }
  }
  return sum;
}

//returns a new size by size grid.
function createEmptyGrid(size) {
  let array = new Array(size);
  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(size);
  }
  return array;
}
