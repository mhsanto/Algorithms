const arr = [34, 32, 112, 1, 23, 13, 4, 21, 3];
const insertionSort = (arr) => {
  const length = arr.length - 1;
  for (let i = 1; i <= length; i++) {
    let temp = arr[i]; //32
    let j = i - 1; //1-1 = 0 = [34]

    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
};
console.log(insertionSort(arr));
