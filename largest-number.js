const findTheLargestNumArr = [99, 66, 55, 444, 33, 32, 24, 35, 22, 11];
// find the largest number
function largestNum(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
      break; // Exit the loop if a larger element is found
    }
  }
  return largest;
}
console.log(largestNum(findTheLargestNumArr));

function largestNum2(arr) {
  return Math.max(...arr);
}
function largestNum3(arr) {
  const large = arr.sort((a, b) => {
    return b - a;
  });

  return large[0];
}
console.log(largestNum2(findTheLargestNumArr));
console.log(largestNum3(findTheLargestNumArr));
