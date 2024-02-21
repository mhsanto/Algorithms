//binary search
console.log("This is Binary Search")

let sortedArr = [11, 22, 24, 32, 33, 35, 44, 55, 66];

const binarySearch = (arr, target) => {
  let l = 0;
  let h = arr.length - 1;

  while (l <= h) {
    let mid = Math.floor((l + h) / 2);

    if (target === arr[mid]) {
      return [mid];
    }

    if (target > arr[mid]) {
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }

  return "not found";
};
console.log(binarySearch(sortedArr, 44));
