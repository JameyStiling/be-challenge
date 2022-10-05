# Coding test Backend Challenge

## Prerequisites

### Install Node JS if not already installed

Refer to https://nodejs.org/en/ to install nodejs

## Steps to run project

1. open terminal window and cd into be-challenge directory
2. run `node challenge.js` in terminal window. This will output the result in the terminal.
3. In order to update the inputs update the `sampleArray` and `numGenerations` variables at the top of `challenge.js`.
   e.g.

   `const sampleArray = [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 2, 0, 0, 0, 0, 0], [0, 0, 0, 1, 2, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 0, 0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ]; `

   `const numGenerations = 10;`

### Result

Using the sampleArray above with 10 generations the output is as follows:
// output of calling giveMeLifByGeneration with 10 generations and the sample array

```
// const sampleTestResult = [
//     [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 3, 3, 0, 2, 0, 0, 0, 0],
//     [0, 1, 0, 1, 0, 2, 0, 0, 0, 2],
//     [0, 0, 0, 0, 0, 2, 0, 0, 0, 2],
//     [0, 1, 1, 0, 0, 3, 0, 2, 0, 0],
//     [0, 0, 3, 1, 0, 1, 1, 0, 0, 0],
//     [0, 0, 1, 3, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   ];
```
