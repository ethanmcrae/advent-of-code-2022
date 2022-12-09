const input = require('../inputs/1');

/**
 * There is one elf that contains the most amount of calories.
 * @param {string} input A multi-line string with calorie groupings
 * @return {number} Highest calorie grouping
 */
function findPlentifulElf(input) {
  // Clean up input and split it by lines
  const inputLines = input.trim().split('\n');
  // Container for grouped sums
  let largestCalorieSum = -Infinity;
  // Variable to hold current sum - resets at each new group
  let calorieSum = 0;
  for (const line of inputLines) {
    // When there is no line we know to:
    if (!line) {
      //  1) if this group is larger than our recorded largest - update
      if (calorieSum > largestCalorieSum) largestCalorieSum = calorieSum;
      //  2) start a new group
      calorieSum = 0;
      // Exit loop iteration early
      continue;
    }

    // When we have a line, a number can be assumed, so we will parse it from string
    // form into a number to be added to the calorieSum for this group.
    const calories = Number(line);
    calorieSum += calories;
  }

  // Add the last group if it is larger than the recorded largest
  if (calorieSum > largestCalorieSum) largestCalorieSum = calorieSum; // Note: calorieSum doesn't get reset here

  // Return the max calorie group's value
  return largestCalorieSum;
}

const solutionResult = findPlentifulElf(input)
console.log(solutionResult);
